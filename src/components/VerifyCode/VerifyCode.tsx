import { ThreeDots } from 'react-loader-spinner';
import useVerifyCode from './useVerifyCode';

export default function VerifyCode() {
  const {register,handleSubmit,errors,handleVerifyCode,isLouding,isCodeFalse} = useVerifyCode()  
  return (
    <div className='px-4 pb-4 pt-20'>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit(handleVerifyCode)}>
              <h2 className='text-center text-gray-900 dark:text-white text-4xl font-bold mb-4'>Send The Code</h2> 
              {isCodeFalse && <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {isCodeFalse}
        </div>}
  <label htmlFor="resetCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verify Code</label>
              <input type="text" id="resetCode" {...register("resetCode", { required: 'required' })} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.resetCode && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.resetCode.message} </div> }
              <button type="submit" className="text-white mt-5 cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
