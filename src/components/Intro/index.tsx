import Link from 'next/link'
import Image from 'next/image'

export default function Intro() {
  return (
    <div className='py-16 px-[15px]'>
      <div className='grid grid-cols-12 place-items-center gap-[30px]'>
        <div className='col-span-6 max-md:col-span-full'>
          <div>
            <Image
              src='/brodard/2023/combo/combo-dongday.png'
              alt='hi'
              width={300}
              height={300}
              className='w-full h-auto'
            />
          </div>
        </div>
        <div className='col-span-6 max-md:col-span-full max-md:text-center'>
          <h3 className='font-medium text-3xl font-titleBanner'>
            "Tác phẩm nghệ thuật trên từng chiếc bánh."
          </h3>
          <p className='my-2'>
            Hộp bánh Trung thu đặc biệt được chạm khắc tinh xảo, cùng với sắo
            màu đỏ sang trọng tạo điểm nhấn nổi bật, một món quả cách điệu mang
            thông điệp Trung thu Như Ý cho tất cả mọi người, mọi nhà khắp nơi
            nơi.
          </p>{' '}
          <p className='mt-5 max-md:flex max-md:justify-center'>
            <Link
              href='/san-pham'
              className='block text-white w-fit rounded-full py-2 px-5 bg-mid-autumn-festival text-2xl font-titleBanner'
            >
              Xem thêm
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
