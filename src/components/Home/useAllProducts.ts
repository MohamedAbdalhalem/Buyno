import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { product } from "../../types"
import { useEffect, useState } from "react"
export default function useAllProducts() {
  const [page,setPage] = useState(1)
  function getAllProduct() {
    return axios.get<{data:product[],metadata: {numberOfPages:number}}>(`https://ecommerce.routemisr.com/api/v1/products?limit=10&page=${page}`)
  }
  const  {data,isLoading} = useQuery({
    queryKey: ['getAllProduct',page],
    queryFn:getAllProduct
  })
  function pageChangeFunction({selected} : {selected:number}){
    setPage(selected + 1)
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    sessionStorage.setItem('page',String(selected + 1))
  }
  useEffect(() => {
    const page = sessionStorage.getItem('page')
    if (page) {
      setPage(Number(page))
    }
  }, [])
  useEffect(() => {
    return () => {
      if (location.pathname !== '' &&
        location.pathname.startsWith('product-detial')) { 
        sessionStorage.removeItem('page')
      }
     }
  }, [])
  const products = data?.data.data
  const numOfPages = data?.data.metadata.numberOfPages
  return {products,isLoading,numOfPages,page,setPage,pageChangeFunction}  
}
