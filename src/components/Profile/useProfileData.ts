import  { useContext, useState } from 'react'
import { AuthenticationContext } from '../../context/AuthenticationContext'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { userData } from '../../types'

export default function useProfileData() {
  const [isProfile,setIsProfile] = useState(false)
    const { token } = useContext(AuthenticationContext)
    function getUserData() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/auth/verifyToken', {
            headers: {
                token : token
            }
        })
    }
    const {data,isLoading} = useQuery({
        queryKey: ['getUserData'],
        queryFn:getUserData
    })
    const userData : userData = data?.data.decoded
    return {isProfile,setIsProfile,userData,isLoading}
}
