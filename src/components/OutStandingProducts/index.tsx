import CardProduct from '../commons/CardProduct'
import data from '@/data/fake.api.json'

export default function OutStandingProducts() {
  const results = data.products.filter((item) => item.type.includes('combo'))

  return (
    <div className=''>
      <h3 className='font-titleBanner text-5xl  max-md:text-4xl  text-center mb-3'>
        Sản phẩm nổi bật
      </h3>
      <p className='text-center font-titleBanner text-3xl max-md:text-2xl mb-3'>
        "Hương vị khó quên, tan chảy trên đầu lưỡi."
      </p>
      <div className='grid grid-cols-12 gap-[30px]'>
        {results.map((combo, index) => (
          <div
            key={index}
            className='col-span-3 max-xl:col-span-4 max-md:col-span-6 max-sm:col-span-full rounded-md'
          >
            <CardProduct data={combo} href='/san-pham' />
          </div>
        ))}
      </div>
    </div>
  )
}
