import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"
export default function useBrandProducts() {
  const { brandId } = useParams()
  function getBrandProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)
  }
  const {data,isLoading} =  useQuery({
    queryKey: ['getBrandProducts', brandId],
    queryFn:getBrandProducts
  })
    return {data,isLoading}
}
