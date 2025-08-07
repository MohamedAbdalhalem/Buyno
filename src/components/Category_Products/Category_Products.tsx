import Product from "../Product/Product"
import { product } from "../../types"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"
import img1 from '../../assets/original-2022966da1fc3718d3feddfdc471ae47-removebg-preview.png'
import useCategoryProducts from "./useCategoryProducts"

export default function Category_Products() {
  const {data,isLoading} = useCategoryProducts()  
  if (isLoading) {
    return <ProductsLoudingScreen count={5} />
  }
  // no data found
  if (data?.data.data.length === 0) {
    return <img src={img1} className="mx-auto" alt="" />
  }
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 pb-4 pt-20">
      {data?.data.data.map((pro: product) => (
        <Product key={pro._id} {...pro} />
      ))}
            </div>
  )
}
