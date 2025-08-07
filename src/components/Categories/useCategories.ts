import { useQuery } from "@tanstack/react-query"
import axios from "axios"
export default function useCategories() {
  function getAllCategories() {
      return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    }
    const {data,isLoading} = useQuery({
      queryKey: ['getAllCategories'],
      queryFn:getAllCategories
    })
    return{data,isLoading}
}
