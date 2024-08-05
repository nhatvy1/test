import data from '@/data/fake.api.json'
import Link from 'next/link'
import MainSection from '@/components/commons/MainSection'
import SidebarProduct from '@/components/commons/SidebarProduct'
import BreadCrumb from '@/components/commons/BreadCrumb'
import { RiSubtractFill } from 'react-icons/ri'
import AddProduct from '@/components/commons/AddProduct'

const getProduct = (type: string | undefined) => {
  const listProducts = data.products
  if (type) {
    const productByType = listProducts.filter(
      (item) => item.type.toLowerCase() === type.toLowerCase()
    )
    return productByType
  }
  return listProducts
}

export default async function SanPham({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { type } = searchParams
  const twentyItems = getProduct(type)

  const breadCrumb = [
    {
      text: 'Sản phẩm',
      href: '/san-pham'
    }
  ]

  return (
    <div>
      <BreadCrumb breadCrumb={breadCrumb} />

      <MainSection bgColor='bg-white'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <SidebarProduct />
          <div className='col-span-12 max-lg:col-span-full rounded-md'>
            {type
              ? twentyItems?.map((item, index) => (
                  <div className='space-y-4' key={index}>
                    <div className='flex flex-wrap items-center justify-between py-4'>
                      <div className='max-[1000px]:basis-full'>
                        <p className=''>{item.name}</p>
                        <Link
                          className='block w-fit text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:w-[0px] after:hover:w-full after:h-[2px] after:bg-blue-500 after:duration-500'
                          href={`/san-pham/${item.slug}-${item.id}`}
                        >
                          Xem thêm
                        </Link>
                      </div>
                      <AddProduct item={item} />
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </MainSection>
    </div>
  )
}
