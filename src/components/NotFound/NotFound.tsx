import notFound from '../../assets/404-error-cloudways-landing-page-1024x534-removebg-preview.png'

export default function NotFound() {
  return (
    <div className='pt-20'>
      <img src={notFound} className=' block mx-auto' alt="not-found page" />
    </div>
  )
}
