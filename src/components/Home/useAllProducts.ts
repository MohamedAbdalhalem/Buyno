import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function useAllProducts() {
  function getAllProduct() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  const  {data,isLoading} = useQuery({
    queryKey: ['getAllProduct'],
    queryFn:getAllProduct
  })
  return {data,isLoading}  
}
