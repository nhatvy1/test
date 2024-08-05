'use client'
import React, { useState } from 'react'

export default function FormContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form data:', formData)
  }

  return (
    <section className=''>
      <div className=''>
        <div>
          <h3 className='text-[1.75rem] mb-2'>Viết nhận xét</h3>
          <p className='mb-4'>
            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
            tôi sẽ liên lạc lại với bạn sớm nhất có thể .
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type='fullName'
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder='Họ và tên của bạn'
              className='block w-full py-2 px-4 border border-[#ccc] placeholder-gray-700 rounded-[4px] outline-none mb-4'
            />
            <input
              type='phone'
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder='Số điện thoại'
              className='block w-full py-2 px-4 border border-[#ccc] placeholder-gray-700 rounded-[4px] outline-none mb-4'
            />
            <input
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Email'
              className='block w-full py-2 px-4 border border-[#ccc] placeholder-gray-700 rounded-[4px] outline-none mb-4'
            />
            <textarea
              value={formData.message}
              onChange={handleChange}
              required
              placeholder='Viết bình luận'
              className='block w-full py-2 px-4 border border-[#ccc] placeholder-gray-700 rounded-[4px] outline-none mb-4'
            ></textarea>
            <div>
              <button type='submit' className='py-[11px] px-[30px] text-lg uppercase bg-mid-autumn-festival text-white rounded-md'>GỬI LIÊN HỆ</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
