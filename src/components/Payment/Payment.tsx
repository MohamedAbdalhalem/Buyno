import { ThreeDots } from "react-loader-spinner"
import usePayment from "./usePayment"
export default function Payment() {
  const {isLouding,iscashError,isCard,setIsCard,register,handleSubmit,errors,cardOrder,cashOrder} = usePayment()
  return (
    <form className="max-w-md mx-auto px-4 pb-4 pt-20" onSubmit={handleSubmit(isCard ? cardOrder : cashOrder)}>
      <h3 className="text-center text-gray-900 mb-4 dark:text-white font-bold text-3xl">Order now</h3>
      {iscashError && <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
              {iscashError}
          </div>}
            <div className="mb-3" >
        <label htmlFor="details" className="block mb-2  font-medium text-gray-900 dark:text-white">Address details</label>
        <input {...register('details', {
          required: 'required',
                pattern:{value: /^[A-Za-z\u0600-\u06FF]+(?: [A-Za-z\u0600-\u06FF]+)*$/,message:'enter your address details'}
              })}
                   type="text" 
          id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        {errors.details && <p className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400">{ errors.details.message }</p>}
      </div>
      <div className="mb-3" >
        <label htmlFor="phone" className="block mb-2  font-medium text-gray-900 dark:text-white">Phone</label>
        <input {...register('phone', {
                required: 'required',
                pattern: { value: /^01[0125]\d{8}$/, message: 'put egyptian number' }
              })}
                   type="tel" 
          id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> 
                {errors.phone && <p className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400">{ errors.phone.message }</p>}
      </div>
      <div className="mb-3" >
        <label htmlFor="city" className="block mb-2  font-medium text-gray-900 dark:text-white">City</label>
        <input {...register('city', {
          required: 'required',
                pattern: { value: /^(?=.*[A-Za-z\u0600-\u06FF]{2})[A-Za-z\u0600-\u06FF ]+$/, message: 'put your city name' }
              })}
                   type="text" 
          id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.city && <p className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400">{ errors.city.message }</p>}
      </div>
      <div className=" mb-4">
  <div className="flex items-center mb-2">
    <input defaultChecked onClick={()=>{setIsCard(false)}} id="default-radio-1" type="radio"  name="default-radio" className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-1"  className="ms-2 cursor-pointer font-bold text-gray-900 dark:text-gray-300">Cash</label>
  </div>
  <div className="flex items-center ">
    <input onClick={()=>{setIsCard(true)}} id="default-radio-2" type="radio" name="default-radio" className="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2" className="ms-2 cursor-pointer font-bold text-gray-900 dark:text-gray-300">Card</label>
  </div>
</div>

      <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {isLouding ? <ThreeDots
                      visible={true}
                      height="20"
                      width="20"
                      color="#fff"
                      radius="5"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      /> : 'Submit'}
            </button>
    </form>
  )
}
