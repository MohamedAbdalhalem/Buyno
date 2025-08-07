import { ThreeDots } from "react-loader-spinner";
import useSignUp from "./useSignUp";

export default function SignUp() {
  const {isExist,isCreated,isLouding,register,handleSubmit,errors,handleSignUp,watch} =useSignUp()

  return (
    <div className='px-4 pb-4 pt-20'>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit(handleSignUp)}>
              
              <h2 className='text-center text-gray-900 dark:text-white text-4xl font-bold mb-4'> Sign-up Now</h2>
              {isExist && <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                  {isExist}
              </div>}
              {isCreated &&<div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                  Account Created Successfuly
              </div>} 
 <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" id="name" {...register("name",{required:'requird',pattern:{
  value: /^[A-Za-z0-9 ]{4,}$/,
  message: 'the name must be 4 char or more'
    }
    })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors.name && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.name.message} </div> }
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                  <input type="email" id="email" {...register("email",
                      { required: 'required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'invalied email' } })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors.email && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.email.message} </div> }
  </div>
 <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone</label>
    <input type="tel" id="phone" {...register("phone",
        { required: 'required', pattern: { value: /^01[0125][0-9]{8}$/, message: 'invalied phone' } })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors.phone && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.phone.message} </div> }
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                  <input type="password" id="password" {...register("password",
                      {required:'required',minLength :{ value: 6,message: "minLength is 6"},maxLength:{value:12,message:'maxLength is 12'}})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors.password && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.password.message} </div> }
  </div>
 <div className="mb-5">
    <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                  <input type="password" id="rePassword" {...register("rePassword", { required: 'required', validate: (value) => value == watch('password') || 'Passwords do not match' })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors.rePassword && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.rePassword.message} </div> }
  </div>
              <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {isLouding ? <ThreeDots
  visible={true}
  height="30"
  width="30"
  color="#fff"
  radius="5"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> : 'Submit'}
  </button>
</form>


    </div>
  )
}
