import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ title }: { title: string }) => {
  return (
    <div className='bg-white flex flex-col h-full border border-gray-200 rounded-2xl shadow p-3'>
      <div className='h-[230px] rounded-2xl  w-full overflow-hidden'>
        <Image
          className='object-top object-cover w-full'
          src='/givral/2024/bang_gia/banh_deo/0.jpg'
          alt='item'
          width={0}
          height={0}
          sizes='100%'
        />
      </div>
      <div className='mt-1 flex flex-1 flex-col justify-between'>
        <div>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
          <p className='mb-3 font-normal line-clamp-3 text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <Link href='/blog/lich-su-hinh-thanh-givral' className='font-medium text-cente text-blue-700'>
            Xem thêm
          </Link>
          <p className='px-3 py-1 text-xs text-blue-900 font-medium rounded-md bg-blue-50'>Blog</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
