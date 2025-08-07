import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { useForm } from "react-hook-form";
import { signUpForm } from "../../types";
import axios from "axios";

export default function useSignUp() {
  const [isExist, setIsExist] = useState<string | boolean>(false);
    const [isCreated, setIsCreated] = useState(false);
    const [isLouding, setIsLouding] = useState(false);
    const navigateHome = useNavigate()
    const {setToken} =useContext(AuthenticationContext)
    const { register, handleSubmit,formState:{errors},watch } = useForm<signUpForm>()
    function handleSignUp(user: signUpForm) {
        setIsLouding(true)
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', user)
            .then((data) => {
                localStorage.setItem('token', data.data.token)
                setToken(data.data.token)
                setIsCreated(true)
                setIsLouding(false)
                setTimeout(() => {
                    setIsCreated(false)
                    navigateHome('/')
                },2000)
            })
            .catch(({response}) => {
                setIsExist(response.data.message)
                setIsLouding(false)
                setTimeout(() => {
                    setIsExist(false)
                },2000)
            })
    }
    return {isExist,isCreated,isLouding,register,handleSubmit,errors,handleSignUp,watch}
}
