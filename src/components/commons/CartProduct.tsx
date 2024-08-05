'use client'

import useCartStore from '@/stores/cart.store'
import Image from 'next/image'

const CartProduct = ({ item }: any) => {
  const { increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useCartStore()

  const handleIncreaseQuantity = (id: number, weight: any) => {
    increaseQuantity(id, weight)
  }

  const handleDecreaseQuantity = (id: number, weight: any) => {
    decreaseQuantity(id, weight)
  }

  const handleDelete = (id: number, weight: any) => {
    removeItemFromCart(id, weight)
  }

  return (
    <div
      className='grid grid-cols-12 gap-[15px] p-3 shadow-contact rounded-lg mb-3 border'
      key={item.id}
    >
      <div className='col-span-3'>
        <div className='border bg-gray-200'>
          <Image
            src={item.img}
            alt={item.name}
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-full'
          />
        </div>
      </div>
      <div className='col-span-9'>
        <div>
          <div className='flex justify-between flex-wrap max-md:flex max-md:flex-col max-md:gap-y-2'>
            <p className='basis-2/3 max-md:basis-full md:pr-2'>{item.name}</p>
            <div className='flex items-center max-md:basis-full'>
              <button
                className='size-[30px] text-center font-medium border'
                onClick={() => handleDecreaseQuantity(item.id, item.trongluong)}
              >
                -
              </button>
              <div
                className='size-[30px] flex items-center justify-center font-medium outline-none bg-gray-300'
                defaultValue={1}
              >
                {item.quantity}
              </div>
              <button
                className='size-[30px] text-center font-medium border'
                onClick={() => handleIncreaseQuantity(item.id, item.trongluong)}
              >
                +
              </button>
            </div>
          </div>
          <div className='flex items-center gap-x-1 mt-1'>
            {item.trongluong && (
              <p className='text-nowrap'>
                {item.trongluong?.egg} Trứng - {item.trongluong?.weight}g -
              </p>
            )}
            <div className='flex items-center max-md:basis-full'>
              {item.trongluong ? (
                <p className=''>
                  {(item.trongluong?.price * item.quantity)?.toLocaleString()} đ
                </p>
              ) : (
                <p className=''>{item?.price?.toLocaleString()} đ</p>
              )}
            </div>
          </div>
          <button
            className=' hover:text-mid-autumn-festival'
            onClick={() => handleDelete(item.id, item.trongluong)}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
