import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { product } from "../../types"
import { useEffect, useState } from "react"
export default function useAllProducts() {
  const [page, setPage] = useState(1)
  const [sortBy,setSortBy] = useState('title')
  function getAllProduct() {
    return axios.get<{data:product[],metadata: {numberOfPages:number}}>(`https://ecommerce.routemisr.com/api/v1/products?limit=10&sort=${sortBy}&page=${page}`)
  }
  const  {data,isLoading} = useQuery({
    queryKey: ['getAllProduct',page,sortBy],
    queryFn:getAllProduct
  })
  function handlepageChange({selected} : {selected:number}){
    setPage(selected + 1)
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    sessionStorage.setItem('page',String(selected + 1))
  }
  function handlesortBy(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value)
    sessionStorage.setItem('sortBy',e.target.value)
  }
  useEffect(() => {
    const page = sessionStorage.getItem('page')
    const sortBy = sessionStorage.getItem('sortBy')
    if (page) {
      setPage(Number(page))
    }
    if (sortBy) {
      setSortBy(sortBy)
    }
  }, [])
  useEffect(() => {
    return () => {
      if (location.pathname !== '' &&
        location.pathname.startsWith('product-detial')) { 
        sessionStorage.removeItem('page')
        sessionStorage.removeItem('sortBy')
      }
     }
  }, [])
  const products = data?.data.data
  const numOfPages = data?.data.metadata.numberOfPages
  return {products,isLoading,numOfPages,page,handlepageChange,handlesortBy,sortBy}  
}
