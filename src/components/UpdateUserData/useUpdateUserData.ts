import { useForm } from "react-hook-form"
import { updateUserData } from "../../types"
import axios from "axios"
import { useContext, useState } from "react"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import { useNavigate } from "react-router-dom"

export default function useUpdateUserData() {
  const { token } = useContext(AuthenticationContext)
    const [isError,setIsError] = useState(false)
    const [isSucces, setIsSucces] = useState(false)
    const [isLouding,setIsLouding] = useState(false)
    const navigateToSignin = useNavigate()
    const { register, handleSubmit,formState: { errors } } = useForm<updateUserData>()
    function handleUpdateUserData(data: updateUserData) {
        setIsLouding(true)
        axios.put('https://ecommerce.routemisr.com/api/v1/users/updateMe', data, {
            headers: {
                token
            }
        }).then(_ => {
            setIsSucces(true)
            setIsLouding(false)
            localStorage.removeItem('token')
            setTimeout(() => {
                setIsSucces(false)
                navigateToSignin('/sign-in')
            }, 3000);
        }).catch(_ => {
            setIsError(true)
            setIsLouding(false)
            setTimeout(() => {
                setIsError(false)
            }, 3000);
        })
    }
    return {isError,isSucces,isLouding,register,handleSubmit,errors,handleUpdateUserData}
}
