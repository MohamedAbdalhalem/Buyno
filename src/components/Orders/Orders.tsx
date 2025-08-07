import Order_Desgin from "../Order_Desgin/Order_Desgin"
import { orderDetails } from "../../types"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"
import useOrders from "./useOrders"

export default function Orders() {
  const {data,isLoading} = useOrders()
  if (isLoading) {
    return <ProductsLoudingScreen count={5}/>
  }
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 pb-4 pt-20'>
      {data?.data.map((order: orderDetails) => <Order_Desgin {...order} />)}    
    </div>
  )
}
