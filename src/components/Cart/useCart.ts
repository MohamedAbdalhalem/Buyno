import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

export default function useCart() {
  const { numOfCartItems, totalCartPrice, products,removeProductFromCart,clearUserCart, updateCartProductQuantity } = useContext(CartContext)
    const [productId, setProductId] = useState<string | null>(null)
    const [isDeleteLouding,setIsDeleteLouding] = useState(false )
    const [isClearLouding, setIsClearLouding] = useState(false)
    function handleUpdateProductQuantity(id : string ,count : number) {
      updateCartProductQuantity(id,count)
    }
    async function handleDeleteProduct(id: string) {
      setIsDeleteLouding(true)
      await removeProductFromCart(id)
      setProductId(null)
      setIsDeleteLouding(false)
    }
    async function handleClearCart() {
      setIsClearLouding(true)
      await clearUserCart()
      setIsClearLouding(false)
    }
    return {numOfCartItems, totalCartPrice, products,handleDeleteProduct,handleClearCart,handleUpdateProductQuantity,productId,isClearLouding,isDeleteLouding,setProductId}
}
