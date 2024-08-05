'use client'

import useCartStore from '@/stores/cart.store'
import { IProduct } from '@/types/product.type'
import { FaCartPlus } from 'react-icons/fa'

const BtnAddToCart = ({ data }: { data: IProduct }) => {
  const { addProduct } = useCartStore()

  const handleAddProduct = () => {
    // addProduct(data)
  }

  return (
    <div
      className='size-[40px] flex items-center justify-center rounded-full bg-[#f3650e] cursor-pointer'
      onClick={handleAddProduct}
    >
      <FaCartPlus className='text-white' />
    </div>
  )
}

export default BtnAddToCart
