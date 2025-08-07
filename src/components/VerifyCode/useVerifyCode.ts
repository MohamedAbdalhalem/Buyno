import  { useState } from 'react'
import { useForm } from 'react-hook-form';
import { code } from '../../types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function useVerifyCode() {
  const { register, handleSubmit, formState: { errors } } = useForm<code>();
      const [isCodeFalse, setIsCodeFalse] = useState<string | boolean>(false)
      const [isLouding, setIsLouding] = useState(false);
      const navigateToResetCode = useNavigate()
      function handleVerifyCode(code: code) {
          setIsLouding(true)
          axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', code)
              .then(_ => {
                  setIsLouding(false)
                  navigateToResetCode('/reset-password')
              })
              .catch(data => {
                  setIsCodeFalse(data.response.data.message)
                  setIsLouding(false)
                  setTimeout(() => {
                      setIsCodeFalse(false)
                  },3000)
          })
    }
    return {register,handleSubmit,errors,handleVerifyCode,isLouding,isCodeFalse}
}
