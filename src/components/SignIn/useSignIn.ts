import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { useForm } from "react-hook-form";
import { signInform } from "../../types";
import axios from "axios";


export default function useSignIn() {
 const [isInValid,setIsInValid] = useState<string | boolean>(false)
  const [isValid, setIsValid] = useState(false)
  const [isLouding, setIsLouding] = useState(false);
  const navigateHome = useNavigate()
  const {setToken} = useContext(AuthenticationContext);
  const { register, handleSubmit, formState: { errors } } = useForm<signInform>()
  function handleSignIn(user: signInform) {
    setIsLouding(true)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', user).
      then(data => {
        localStorage.setItem('token', data.data.token)
        setToken(data.data.token)
        setIsValid(true)
        setIsLouding(false)
        setTimeout(() => {
          setIsValid(false)
          navigateHome('/')
        },2000)
      }).
      catch(data => {
        setIsInValid(data.response.data.message)
        setIsLouding(false)
        setTimeout(() => {
          setIsInValid(false)
        },2000)
      })
    }
    return {isInValid,isValid,isLouding,register,handleSubmit,errors,handleSignIn}
}
