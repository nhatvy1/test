import BreadCrumb from '@/components/commons/BreadCrumb'
import CardProduct from '@/components/commons/CardProduct'
import MainSection from '@/components/commons/MainSection'
import Pagination from '@/components/commons/Pagination'
import SidebarCombo from '@/components/commons/SidebarCombo'
import data from '@/data/fake.api.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Combo Trung thu 2024 - Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}

const getCombo = (type: string) => {
  const comboList = data.products.filter((item) =>
    item.type.includes(`combo/${type}`)
  )
  return comboList
}

export default async function SanPham({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { type } = searchParams

  const data = getCombo(type as string)

  const breadCrumb = [
    {
      text: 'Combo',
      href: '/combo'
    }
  ]

  return (
    <>
      {/*   <div className='p-[10px] mb-4 bg-white flex justify-center'>
        <button className='border rounded-md py-2 px-4'>Sắp xếp theo:</button>
      </div> */}

      <BreadCrumb breadCrumb={breadCrumb}/>

      <MainSection bgColor='bg-slate-100'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <SidebarCombo />
          <div className='col-span-12 max-lg:col-span-full rounded-md'>
            <div className='grid grid-cols-12 auto-rows-fr gap-[30px]'>
              {data?.map((item) => (
                <div
                  key={item.id}
                  className='col-span-4 max-md:col-span-6 max-sm:col-span-full bg-white'
                >
                  <CardProduct data={item} href='/combo' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainSection>
    </>
  )
}
