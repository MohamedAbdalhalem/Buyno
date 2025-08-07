import { useContext, useState } from "react"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { shippingAddress } from "../../types"
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-toastify"


export default function usePayment() {
 const { token } = useContext(AuthenticationContext)
  const { cartId, clearStates } = useContext(CartContext)
  const [isLouding, setIsLouding] = useState(false)
  const naviagteToOrders = useNavigate()
  const [iscashError, setiscashError] = useState<string | null>(null)
  const [isCard, setIsCard] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<shippingAddress>()
  function cashOrder(shippingAddress: shippingAddress) {
    setIsLouding(true)
    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
      shippingAddress
    },
      {
        headers:{ token }
      }
    ).then(_ => {
      setIsLouding(false)
      toast.success('order done', { position: 'top-right', style: { width: '200px' },autoClose: 1000 })
      clearStates()
      setTimeout(() => {
        naviagteToOrders('/allorders')
      }, 1000);
    }).catch(err => { 
      setIsLouding(false)
      setiscashError('your cart is  empty')
      console.log(err.response)
      setTimeout(() => {
        setiscashError(null)
      }, 3000);
    })
  }
  function cardOrder(shippingAddress: shippingAddress) {
    setIsLouding(true)
    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`, {
      shippingAddress
    }, {
      headers:{ token }
    })
      .then(data => {
        setIsLouding(false)
        clearStates()
        window.open(data.data.session.url)
      })
      .catch(err => {
        setIsLouding(false)
      console.log(err)
    })
    }
    return {isLouding,iscashError,isCard,setIsCard,register,handleSubmit,errors,cardOrder,cashOrder}
}
