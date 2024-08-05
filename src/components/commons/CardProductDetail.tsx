'use client'

import Link from 'next/link'
import useCartStore from '@/stores/cart.store'
import { IProduct } from '@/types/product.type'

import dataJson from '@/data/fake.api.json'
import { FaFacebookSquare } from 'react-icons/fa'

interface Props {
  data: IProduct
}

const ProductDetail = ({ data }: Props) => {
  const { addProduct } = useCartStore()

  const handleAddProduct = (data: IProduct) => {
    addProduct(data, 1)
  }

  return (
    <div>
      <div>
        <h4 className='mb-2 text-xl'>Thông tin sản phẩm</h4>
        <p>{data?.body}</p>
        <p>
          {data.codes?.map((code: any) => {
            const [id, value] = code.split('/')
            const item = dataJson.products.find((item) => item.id == id) as any
            const codeBanh =
              item?.trongluong?.[value]?.code ?? 'No code available'
            return (
              <div key={id}>
                <strong>{item?.name}</strong> --- <strong>{codeBanh}</strong>
              </div>
            )
          })}
        </p>
      </div>
      <div className='mt-7 pt-5 pb-[10px] border-y border-dashed border-gray-300'>
        <p>
          Giá:{' '}
          {data?.price ? (
            <span className='text-[#f3650e]'>
              {data?.price.toLocaleString()} đ
            </span>
          ) : (
            <span className='text-[#f3650e] font-medium'>Liên hệ</span>
          )}
        </p>
        {data?.price && (
          <button
            className='w-full bg-[#dc3545] hover:bg-[#c82333] mt-2 py-2 rounded-md text-white'
            onClick={() => handleAddProduct(data)}
          >
            Thêm giỏ hàng
          </button>
        )}
      </div>
      <div className='pt-5 pb-[10px]'>
        <p className='flex items-center gap-x-3'>
          Chia sẻ:{' '}
          <Link href='#' className=''>
            <FaFacebookSquare size={24} className='text-blue-500' />
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ProductDetail
