import { useEffect } from "react";
import { useProductStore } from "../store/products";
import { useFetch } from "../utils/hooks/useFetch";
import Product from "./Product";

import { RefreshCcw } from "lucide-react";

const Products = () => {

  const { products , getAllProducts , isLoading , error , refetch } = useProductStore(state => state)

  useEffect(()=>{
    (async()=>{
      let prs = await getAllProducts()
    console.log(prs);
    })()
  },[])
  

  return (
    <section className='py-20'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-semibold mb-10 text-center'>
          Explore Our Products
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {error && (
            <div>
              <p className='text-red-500 mb-2'>{error.message}</p>
              <button
                onClick={refetch}
                className='border rounded-md py-2 px-3 bg-slate-100'
              >
                Try again
                <span>
                  <RefreshCcw className='ml-2 inline-block w-5' />
                </span>
              </button>
            </div>
          )}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => {
              return <Product product={product} key={product.id} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
