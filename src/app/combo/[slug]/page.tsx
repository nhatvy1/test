import BreadCrumb from '@/components/commons/BreadCrumb'
import CardProductDetail from '@/components/commons/CardProductDetail'
import DescriptionProductDetail from '@/components/commons/DescriptionProductDetail'
import MainSection from '@/components/commons/MainSection'

import data from '@/data/fake.api.json'
import Image from 'next/image'

interface IParams {
  slug: string
}

const getComboId = (_id: string | undefined) => {
  if (_id) {
    return data.products.find((item) => item.id === parseInt(_id))
  } else {
    throw new Error('Không tìm thấy sản phẩm')
  }
}

export default function ComboDetailPage({ params }: { params: IParams }) {
  const { slug } = params
  let id = slug.split('-').pop()
  const data = getComboId(id)

  const breadCrumb = [
    {
      text: 'Combo',
      href: '/combo'
    }
  ]

  if (data) {
    breadCrumb.push({
      text: data.name,
      href: `/combo/${data.slug}-${data.id}`
    })
  }

  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />

      <MainSection className='py-10 bg-white'>
        {data ? (
          <div className='p-4 bg-white rounded-md'>
            <h1 className='text-4xl mb-2'>{data?.name}</h1>
            <p>
              Thương hiệu:{' '}
              <span className='text-[#f3650e]'>
                Bánh trung thu{' '}
                {data?.type === 'combo/givral' ? 'Givral' : 'Brodard'}
              </span>{' '}
            </p>
            <div className='grid grid-cols-12 gap-5 mt-4'>
              <div className='col-span-6 max-md:col-span-full'>
                <div className='w-[397px] h-[267px]'>
                  <Image
                    src={data?.img}
                    alt={data?.name}
                    width={0}
                    height={0}
                    sizes='100%'
                    className='w-full h-full'
                  />
                </div>
              </div>
              <div className='col-span-6 max-md:col-span-full'>
                <CardProductDetail data={data} />
              </div>
            </div>
            <DescriptionProductDetail />
          </div>
        ) : (
          <p>Không tìm thấy sản phẩm</p>
        )}
      </MainSection>
    </>
  )
}
