import Product from "../Product/Product"
import { product } from "../../types"
import Slider from "../Slider/Slider"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"
import useAllProducts from "./useAllProducts"
import ReactPaginate from "react-paginate"
export default function Home() {
  const {products,isLoading,numOfPages,page,pageChangeFunction} = useAllProducts()
  if (isLoading) {
    return <ProductsLoudingScreen count={5} />
  }
  
  return (
    <div className="pt-22 pb-4">
        <Slider/>
        <div className="grid  md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
          {products?.map((pro: product) => (
            <Product key={pro._id} {...pro} />
          ))}
      </div>
      <ReactPaginate
          pageCount={numOfPages!}
          marginPagesDisplayed={1}
          containerClassName="flex justify-center items-center gap-2 mt-4 px-5 "
          pageClassName="border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          activeClassName="bg-blue-600 text-white font-bold"
          previousLabel={<i className='fa-solid fa-chevron-left'></i>}
          nextLabel={<i className='fa-solid fa-chevron-right'></i>}
          previousClassName="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          nextClassName="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          breakLabel='...'
          breakClassName="text-gray-400 px-2"
          disabledClassName="opacity-50 cursor-not-allowed"
          forcePage={page - 1}
          onPageChange={pageChangeFunction}
    />
    </div>
  )
}
