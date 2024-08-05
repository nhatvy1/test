import type { Metadata } from 'next'
import FormContact from '@/components/FormContact'
import MainSection from '@/components/commons/MainSection'
import BreadCrumb from '@/components/commons/BreadCrumb'
import GoogleMap from '@/components/commons/GoogleMap'

export const metadata: Metadata = {
  title: 'Danh sách sản phẩm - Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}
export default function page() {
  const breadCrumb = [
    {
      text: 'Liên hệ',
      href: '/lien-he'
    }
  ]

  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />
      <MainSection className='bg-white'>
        <div className='grid grid-cols-12 gap-[15px]'>
          <div className='col-span-6 max-md:col-span-full bg-gray-100 overflow-hidden rounded-2xl'>
            <GoogleMap />
          </div>
          <div className='col-span-6 max-md:col-span-full'>
            <FormContact />
          </div>
        </div>
      </MainSection>
    </>
  )
}
