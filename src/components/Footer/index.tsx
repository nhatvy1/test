import Link from 'next/link'
import GoogleMap from '../commons/GoogleMap'

export default function Footer() {
  return (
    <footer className='bg-mid-autumn-festival text-white py-10 px-[15px] w-full max-md:pb-20'>
      <div className='min-[1200px]:max-w-screen-container-custom mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-6 max-[1200px]:col-span-5 max-md:col-span-full'>
            <h3 className='text-5xl mb-3 w-fit font-titleBanner max-md:font-medium relative after:absolute after:w-full after:bottom-0 after:left-0 after:bg-white after:h-[2px]'>
              Liên hệ
            </h3>
            <ul className='flex flex-col gap-2'>
              <li>
                Địa chỉ: Toà Nhà Safira Khang Điền, 454 Võ Chí Công, Phường Phú
                Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
              </li>
              <li>Email: trungthugivral1950@gmail.com</li>
              <li>Hotline: 093 4127409</li>
            </ul>
          </div>
          <div className='col-span-3 max-[1200px]:col-span-2 max-md:col-span-full'>
            <h3 className='text-5xl mb-3 w-fit font-titleBanner max-md:font-medium relative after:absolute after:w-full after:bottom-0 after:left-0 after:bg-white after:h-[2px]'>
              Thông tin
            </h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href='/bang-gia'>Bảng giá bánh trung thu 2024</Link>
              </li>
              <li>
                <Link href='/#'>Mẫu hộp 2024</Link>
              </li>
              <li>
                <Link href='/#'>In logo</Link>
              </li>
              <li>
                <Link href='/#'>Phương thức thanh toán</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-3 max-[1200px]:col-span-2 max-md:col-span-full'>
            <h3 className='text-5xl mb-3 w-fit font-titleBanner max-md:font-medium relative after:absolute after:w-full after:bottom-0 after:left-0 after:bg-white after:h-[2px]'>
              Dịch vụ
            </h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href={'/lien-he'}>Hỗ trợ tư vấn</Link>
              </li>
              <li>
                <Link href={'/lien-he'}>Xuất hóa đơn</Link>
              </li>
              <li>
                <Link href={'/lien-he'}>Lên mẫu logo miễn phí</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
