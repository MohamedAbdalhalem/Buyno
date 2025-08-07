import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"
export default function useCategoryProducts() {
 const { categoryId } = useParams()
   function getCategoryProducts() {
     return axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`)
   }
   const {data,isLoading} =  useQuery({
     queryKey: ['getCategoryProducts', categoryId],
     queryFn:getCategoryProducts
   })
    return {data,isLoading}
}
