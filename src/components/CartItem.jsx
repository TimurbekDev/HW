import { Link } from "react-router-dom";

import { Plus, Minus, X } from "lucide-react";
import { useCartStore } from "../store/cart";

const CartItem = ({ item }) => {
  const { id, title, images, price, count } = item;
  const { increaseCount ,decreaseCount,removeFromCart} = useCartStore(state=>state)

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={images[0]} alt='' />
        </Link>
        <div className='w-full flex flex-col'>
          {/* title and remove icon */}
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link
              to={`/product/${id}`}
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              // onClick={() => removeFromCart(id)}
              className='text-xl cursor-pointer'
            >
              <X
                className='sidebar text-gray-500 hover:text-red-500 transition'
                onClick={() => removeFromCart(id)}
              />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* quantity */}
            <div className='flex flex-1 max-w-[100px] px-2 items-center h-full border text-primary font-medium'>
              <div
                // onClick={()=>decreaseAmount(id)}
                className='h-full flex-1 flex justify-center items-center cursor-pointer'
              >
                <Plus
                  className='w-4'
                  onClick={() => decreaseCount(id)}
                />
              </div>
              <div className='h-full flex justify-center items-center px-2'>
                {count}
              </div>
              <button
                // onClick={()=>increaseAmount(id)}
                disabled={count === 1}
                className='disabled:opacity-50 h-full flex flex-1 justify-center items-center cursor-pointer'
              >
                <Minus
                  className='w-4'
                  onClick={() => increaseCount(id)}
                />
              </button>
            </div>
            {/* item price */}
            <div className='flex flex-1 justify-around items-center'>
              $ {price}
            </div>
            {/* final price */}
            <div className='flex flex-1 justify-end items-center text-primary font-medium'>{`$ ${parseFloat(
              price * Number(item.count)
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;