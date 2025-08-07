import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"
import { productDelials } from "../../types"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { WishlistContext } from "../../context/WishlistContext"


export default function useProductDetials() {
    const {addProductToWishlist,removeProductFromWishlist,products} = useContext(WishlistContext)
    const { addProducToCart } = useContext(CartContext)
    function handleAddToProduct() {
    addProducToCart(productId)
  }
  function handleAddToWishlist() {
    addProductToWishlist(productId)
  }
  function handleRemoveFromWishlist() {
    removeProductFromWishlist(productId)
  }
    const { productId } = useParams()
      function getProductDetials() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
    }
    const { data,isLoading } = useQuery({
        queryKey: ['getProductDetials', productId],
        queryFn: getProductDetials
    })
    const productDetials: productDelials = data?.data.data
    return {productDetials,isLoading,products,handleAddToProduct,handleAddToWishlist,handleRemoveFromWishlist}
}
