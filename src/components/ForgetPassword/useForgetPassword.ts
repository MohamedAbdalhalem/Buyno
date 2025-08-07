import { useForm } from "react-hook-form";
import { email } from "../../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function useForgetPassword() {
  const [isLouding, setIsLouding] = useState(false);
      const [isError, setIsError] = useState<string | boolean>(false)
      const navigateVerifyCode = useNavigate()
      const { register, handleSubmit, formState: { errors } } = useForm<email>()
      function forgetpassword(email: email) {
          setIsLouding(true)
          axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', email).then(_ => {
              setIsLouding(false)
              navigateVerifyCode('/verify-code')
          })
              .catch(data => {
                  setIsLouding(false) 
                  setIsError(data.response.data.message)
                  setTimeout(() => {
                      setIsError(false)
                  },2000)
          })
    }
    return {isLouding,isError,register,handleSubmit,errors,forgetpassword}
}
