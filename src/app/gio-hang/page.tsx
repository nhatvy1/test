'use client'
import MainSection from '@/components/commons/MainSection'
import Link from 'next/link'
import BreadCrumb from '@/components/commons/BreadCrumb'
import useCartStore from '@/stores/cart.store'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Modal from '@/components/commons/Modal'
import CartProduct from '@/components/commons/CartProduct'
import { IFormOrder } from '@/types/form.order.type'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '@/components/commons/Input'
import calculateTotalPrice from '@/utils/calculateTotalPrice'
import GoogleMap from '@/components/commons/GoogleMap'

const ProductManager = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormOrder>()

  const { cartItems, quantity, order } = useCartStore()

  const onSubmit: SubmitHandler<IFormOrder> = async (data: IFormOrder) => {
    try {
      setLoading(true)
      if (cartItems) {
        const payload = {
          order: data,
          data: cartItems
        }
        const promise = await fetch('/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }).then((response) => {
          if (!response.ok) {
            throw new Error('Có lỗi xày ra, vui lòng thử lại')
          }
          return response
        })
        order()
        toast.success('Đặt hàng thành cồng')
        return
      }
      toast.error('Không có đơn hàng')
    } catch (e) {
      console.log(e)
    } finally {
      setShowModal(false)
      setLoading(false)
    }
  }

  const breadCrumb = [
    {
      text: 'Giỏ hàng',
      href: '/san-pham'
    }
  ]

  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />
      <MainSection bgColor='bg-white'>
        {cartItems.length ? (
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-8 max-lg:col-span-full'>
              {cartItems?.map((item, index) => (
                <CartProduct item={item} key={index} />
              ))}
            </div>
            <div className='col-span-4 max-lg:col-span-full p-3 border shadow-contact rounded-lg h-fit'>
              <p className='pb-3 font-medium'>Thông tin đơn hàng</p>
              <p className='pb-3'>
                Số lượng sản phẩm:{' '}
                <span className='font-medium'>{quantity}</span>
              </p>
              <p className='pb-3'>
                Thành tiền:{' '}
                <span className='font-medium'>
                  {calculateTotalPrice(cartItems)?.toLocaleString()} đ
                </span>
              </p>
              <hr className='bg-black' />
              <button
                className='w-full text-white bg-mid-autumn-festival py-2 mt-3  rounded-md'
                onClick={() => setShowModal(true)}
              >
                Đặt hàng
              </button>
              <Link
                href='/combo'
                className='block w-full border py-2 mt-3 text-center rounded-md'
              >
                Tiếp tục mua hàng
              </Link>
            </div>
          </div>
        ) : (
          <p>Giỏ hàng rỗng</p>
        )}
      </MainSection>

      <MainSection className='bg-slate-50'>
        <div>
          <h3 className='font-titleBanner text-5xl max-md:text-4xl text-center'>
            Lời cảm ơn
          </h3>
          <p className='text-center max-w-[740px] mx-auto'>
            Mùa trăng rằm đã về, chúng mình xin gửi lời chào trân trọng đến quý
            khách. Hãy để những chiếc bánh trung thu thơm ngon của chúng tôi làm
            ngọt ngào thêm đêm hội trăng rằm của bạn.
            <br />
            <br />
            Cảm ơn bạn đã ghé thăm! Chúng tôi luôn mong muốn mang đến cho khách
            hàng những chiếc bánh trung thu chất lượng nhất với giá cả hợp lý.
            Hãy để chúng tôi đồng hành cùng bạn trong mùa trung thu này
          </p>
        </div>
      </MainSection>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h3 className='text-xl font-medium mb-3'>Thông tin đặt hàng</h3>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
          <div className=''>
            <label>Họ và tên</label>
            <Input
              type='text'
              placeholder='Nhập họ và tên'
              {...register('fullName', {
                required: {
                  value: true,
                  message: 'Vui lòng nhập họ tên'
                }
              })}
            />
            {errors.fullName?.message && (
              <p className='text-sm mt-1 text-pink-500'>
                {errors.fullName?.message}
              </p>
            )}
          </div>
          <div className=''>
            <label>Email</label>
            <Input
              type='email'
              placeholder='Nhập địa chỉ email'
              {...register('email', {
                required: 'Vui lòng nhập email',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Email không đúng định dạng'
                }
              })}
            />
            {errors.email?.message && (
              <p className='text-sm mt-1 text-pink-500'>
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className=''>
            <label>Số điện thoại</label>
            <Input
              type='text'
              placeholder='Số điện thoại'
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Vui lòng nhập số điện thoại'
                }
              })}
            />
            {errors.phone?.message && (
              <p className='text-sm mt-1 text-pink-500'>
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div className=''>
            <label>Địa chỉ</label>
            <Input
              type='text'
              placeholder='Địa điểm giao hàng'
              {...register('address', {
                required: {
                  value: true,
                  message: 'Vui lòng nhập địa chỉ giao hàng'
                }
              })}
            />
            {errors.address?.message && (
              <p className='text-sm mt-1 text-pink-500'>
                {errors.address?.message}
              </p>
            )}
          </div>
          <div className=''>
            <label>Ghi chú</label>
            <textarea
              placeholder='Ghi chú thêm'
              {...register('notes')}
              className='block w-full p-2 rounded-md'
            />
          </div>
          <div>
            <button
              disabled={loading}
              type='submit'
              className='py-2.5 px-10 me-2 text-sm font-mediu rounded-lg text-white bg-mid-autumn-festival focus:z-10 focus:ring-2 inline-flex items-center'
            >
              {loading && (
                <svg
                  aria-hidden='true'
                  role='status'
                  className='inline w-4 h-4 me-3 text-white animate-spin '
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='white'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='#FFF'
                  />
                </svg>
              )}
              {loading ? 'Đang đặt hàng' : 'Đặt hàng'}
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default ProductManager
