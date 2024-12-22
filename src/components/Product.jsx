import { useContext } from "react";
import { Link } from "react-router-dom";

// import { Plus, BsEyeFill } from "react-icons/bs";
import { Plus, Eye } from "lucide-react";
import { useCartStore } from "../store/cart";

const Product = ({ product }) => {
 const { cart , addToCart } = useCartStore(state=>state)
  // destructure product
  const { id, images, category, title, price } = product;

  const disabled = cart.some((product) => product.id === id);

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={images[0]}
              alt=''
            />
          </div>
        </div>
        {/* buttons */}
        <div className='border absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button
            disabled={disabled}
            onClick={() => addToCart(product)}
          >
            <div
              className={`flex justify-center items-center text-white w-12 h-12 ${
                disabled ? "bg-gray-200" : "bg-teal-500"
              }`}
            >
              <Plus className='text-3xl' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <Eye />
          </Link>
        </div>
      </div>
      {/* category, title & price */}
      <div>
        <div className='tex-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>

        <h2 className='font-semibbold'>$ {price}</h2>
      </div>
    </div>
  );
};

export default Product;
