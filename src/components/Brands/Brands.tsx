import { catergoryOrbrand } from '../../types'
import ProductsLoudingScreen from '../ProductsLoudingScreen/ProductsLoudingScreen'
import BrandProduct from '../BrandProduct/BrandProduct'
import useBrands from './useBrands'

export default function Brands() {
  const {data,isLoading}  = useBrands()  
  if (isLoading) {
    return <ProductsLoudingScreen count={5} />
  }
  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-6 px-4 pb-4 pt-20 gap-8'>
      {data?.data.data.map((brand : catergoryOrbrand) => <BrandProduct key={brand._id} {...brand} />) }
    </div>
  )
}
