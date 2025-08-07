import { catergoryOrbrand } from "../../types"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"
import CategoryProduct from "../CategoryProduct/CategoryProduct"
import useCategories from "./useCategories"

export default function Categories() {
  const {data,isLoading} = useCategories()
  if (isLoading) {
    return <ProductsLoudingScreen count={5}/>
  }
  return (
    
<div className="px-4 pb-4 pt-20">
  
  <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-8'>
        {data?.data.data.map((category : catergoryOrbrand) => <CategoryProduct key={category._id} {...category} />) }
      </div>
      
</div>


  )
}
