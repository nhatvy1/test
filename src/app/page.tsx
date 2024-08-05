import type { Metadata } from 'next'
import BannerPage from '@/components/BannerPage'
import MainSection from '@/components/commons/MainSection'
import OutStandingProducts from '@/components/OutStandingProducts'
import Intro from '@/components/Intro'
import { BsSend } from 'react-icons/bs'

export const metadata: Metadata = {
  title: 'Trang chủ - Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}

export default function Home() {
  return (
    <main>
      <BannerPage />
      <MainSection className='bg-white'>
        <div className='flex flex-col gap-20'>
          <div>
            <h3 className='font-titleBanner text-5xl max-md:text-4xl text-center'>
              Welcome to MoonCake Store
            </h3>
            <p className='text-center'>
              "Cửa hàng bánh trung thu của chúng tôi là nơi giao hòa giữa truyền
              thống và hiện đại. Với bàn tay khéo léo của những nghệ nhân làm
              bánh, mỗi chiếc bánh trung thu đều mang đậm hương vị cổ truyền,
              gợi nhớ những ký ức tuổi thơ. Chúng tôi không chỉ đơn thuần bán
              bánh, mà còn mang đến cho khách hàng những trải nghiệm ẩm thực
              tinh tế và ý nghĩa."
            </p>
          </div>
          <OutStandingProducts />
        </div>
        <Intro />
        <div></div>
      </MainSection>
      <MainSection>
        <div className='flex flex-col items-center gap-5'>
          <div className='text-center text-white'>
            <h3 className='text-4xl font-titleBanner'>Liên hệ chúng tôi</h3>
            <p>Sign Up for our newsletter and never miss any offers</p>
          </div>
          <div className='h-12 flex items-center rounded-l-md rounded-r-md overflow-hidden'>
            <input
              placeholder='Địa chỉ email của bạn'
              className='h-full w-[300px] px-2 border outline-none placeholder:font-light'
            />
            <button className='h-full px-4 bg-mid-autumn-festival'>
              <BsSend size={20} className='text-white'/>
            </button>
          </div>
        </div>
      </MainSection>
    </main>
  )
}
