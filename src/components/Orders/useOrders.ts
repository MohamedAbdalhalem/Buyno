import { useContext } from "react"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

export default function useOrders() {
  const { userId } = useContext(AuthenticationContext)
    function getOrders() {
      return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
    }
    const{data,isLoading} =  useQuery({
      queryKey: ['getOrders'],
      queryFn: getOrders
    })
    return{ data,isLoading}
}
