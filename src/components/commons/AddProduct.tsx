'use client'

import useCartStore from '@/stores/cart.store'
import { useEffect, useState } from 'react'
import { RiSubtractFill } from 'react-icons/ri'
import { MdOutlineAdd } from 'react-icons/md'

const AddProduct = ({ item }: any) => {
  const { addProduct } = useCartStore()

  const [quantity, setQuantity] = useState(1)
  const [weight, setWeight] = useState('')

  const handleAddToCart = () => {
    addProduct(item, quantity, weight)
  }

  const handleOnChange = (e: any) => {
    setWeight(e.target.value)
    setQuantity(1)
  }

  const handleQuantity = (str: 'increase' | 'decrease') => {
    switch (str) {
      case 'increase':
        if (quantity >= 1) {
          setQuantity((prev) => prev + 1)
        }
        break
      case 'decrease':
        if (quantity > 1) {
          setQuantity((prev) => prev - 1)
        }
        break
      default:
        return
    }
  }

  useEffect(() => {
    setWeight(Object.keys(item?.trongluong)[0])
    setQuantity(1)
  }, [item])

  return (
    <div className='flex flex-wrap items-center gap-2'>
      <div className='flex items-center gap-x-2'>
        <button
          className='size-[40px] rounded-md flex items-center justify-center border'
          onClick={() => handleQuantity('decrease')}
        >
          <RiSubtractFill />
        </button>
        <input
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          min={1}
          className='w-[70px] rounded-md h-10 outline-none text-center border'
        />
        <button
          className='size-[40px] rounded-md flex items-center justify-center border'
          onClick={() => handleQuantity('increase')}
        >
          <MdOutlineAdd size={18} />
        </button>
      </div>
      <div className='flex items-center gap-x-2'>
        <select className='border h-10 bg-white px-2 rounded-md outline-none' onChange={handleOnChange}>
          {item.trongluong &&
            Object.keys(item.trongluong).map((key) => {
              const trongluongDetails =
                item.trongluong[key as keyof typeof item.trongluong] // Sử dụng as
              return (
                <option key={key} value={key}>
                  {key}g - {trongluongDetails?.egg} Trứng -{' '}
                  {trongluongDetails?.price?.toLocaleString()} đ
                </option>
              )
            })}
        </select>
        <button className='text-red-600' onClick={handleAddToCart}>
          🛒
        </button>
      </div>
    </div>
  )
}

export default AddProduct
