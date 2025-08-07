import Product from "../Product/Product"
import { product } from "../../types"
import Slider from "../Slider/Slider"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"
import useAllProducts from "./useAllProducts"

export default function Home() {
  const {data,isLoading} = useAllProducts()
  if (isLoading) {
    return <ProductsLoudingScreen count={5} />
  }
  
  return (
    <div className="pt-22">
        <Slider/>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
          {data?.data.data.map((pro: product) => (
            <Product key={pro._id} {...pro} />
          ))}
        </div>
    </div>
  )
}
