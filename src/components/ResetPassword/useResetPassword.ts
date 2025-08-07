import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { useForm } from "react-hook-form";
import { reserPassword } from "../../types";
import axios from "axios";


export default function useResetPassword() {
  const [isError,setIsError] = useState<string | boolean>(false)
    const [isSuccess,setIsSuccess] = useState(false)
    const [isLouding, setIsLouding] = useState(false);
    const navigateToHome = useNavigate()
    const {setToken} = useContext(AuthenticationContext)
    const { register, handleSubmit, formState: { errors } } = useForm<reserPassword>()
    function handleResetPassword(user: reserPassword) {
      setIsLouding(true)
      axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',user).
        then(data => {
          localStorage.setItem('token', data.data.token)
          setToken(data.data.token)
            setIsLouding(false)
            setIsSuccess(true)
            setTimeout(() => {
                setIsSuccess(false)
                navigateToHome('/')
            },3000)
        }).
        catch(data => {
            console.log(data.response.data.message)
            setIsLouding(false)
            setIsError(data.response.data.message)
            setTimeout(() => {
                setIsError(false)
            },3000)
        })
    }
    return{isError,isSuccess,isLouding,register,handleSubmit,errors,handleResetPassword}
}
