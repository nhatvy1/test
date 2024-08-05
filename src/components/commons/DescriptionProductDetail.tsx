'use client'

import Image from 'next/image'
import { useState } from 'react'

const DescriptionProductDetail = () => {
  const [open, setOpen] = useState(1)

  return (
    <div className='mt-4'>
      <div className='text-sm text-center border-b border-gray-200 '>
        <ul className='flex flex-wrap -mb-px'>
          <li
            className={`me-2 inline-block p-4  ${
              open === 1 ? 'border-[#f3650e] border-b-2' : ''
            } rounded-t-lg active cursor-pointer`}
            onClick={() => setOpen(1)}
          >
            Thôn tin chi tiết sản phẩm
          </li>
          <li
            className={`me-2 inline-block p-4 ${
              open === 2 ? 'border-[#f3650e] border-b-2' : ''
            }  rounded-t-lg active cursor-pointer`}
            onClick={() => setOpen(2)}
          >
            Bình luận
          </li>
        </ul>
      </div>
      <div className={`${open === 1 ? 'flex' : 'hidden'} flex-col gap-4 mt-4`}>
        <p className='text-[#ff0000] font-medium'>- Giao hàng miễn phí</p>
        <p className='text-[#ff0000] font-medium'>
          - In logo miễn phí từ 100 hộp
        </p>
        <p className='text-[#ff0000] font-medium'>- Chiết khấu cao nhất</p>
        <p className=''>Gọi ngay để được báo giá và chiết khấu tốt nhất.</p>
        <p>
          Liên hệ: <span className='text-[#ff6600]'>02838374987</span> -{' '}
          <span className='text-[#ff6600]'>0286270 0998</span>
        </p>
        <p>
          Một mùa Tết Đoàn Viên lại về với đầy ắp niềm vui và sự hân hoan. Một
          năm đầy biến động đã qua, trong dịp lễ hội sum vầy năm nay mỗi chúng
          ta càng trân quý hơn sức khỏe và thời gian bên gia đình, người thân và
          bạn bè. Chia sẻ tâm tư đó,{' '}
          <span className='font-medium'>bánh trung thu khách sạn 5 sao </span>{' '}
          cũng nhận được sự ưu ái của đông đảo khách hàng.
        </p>
        <p>
          <span className='font-medium'>Bánh trung thu khách sạn 5 sao</span>
          Caravelle năm nay được đóng gói trong thiết kế sang trọng tạo nên sự
          huyền bí thu hút mọi ánh nhìn
        </p>
        <p className='font-medium'>
          Gồm 2 set Heritage Mooncake Box và Deluxe Mooncake Box
        </p>
        <div>
          <Image
            src='/givral/2024/album/trung_thu_givral_2024_1.jpg'
            alt='banh-trung-thu'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-auto'
          />
        </div>
        <div>
          <Image
            src='/givral/2024/album/trung_thu_givral_2024_2.jpg'
            alt='banh-trung-thu'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-auto'
          />
        </div>
      </div>
      <div className={`${open === 2 ? 'block' : 'hidden'} gap-4 mt-4`}>
        <p>Chưa có bình luận</p>
      </div>
    </div>
  )
}

export default DescriptionProductDetail
