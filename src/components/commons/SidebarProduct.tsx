'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa'

const SidebarProduct = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('type')

  const lists = [
    {
      text: 'Bánh Trung Thu Givral',
      href: '/san-pham?type=givral'
    },
    {
      text: 'Bánh Trung Thu Brodard',
      href: '/san-pham?type=brodard'
    }
  ]

  return (
    <div className='col-span-full'>
      <ul className='grid grid-cols-12'>
        <li className='col-span-3 max-md:col-span-6 max-sm:col-span-full'>
          <Link
            href={lists[0].href}
            className={`flex items-center gap-x-1 text-nowrap p-4  border-b-2 border-transparent rounded-t-lg ${
              search === 'givral'
                ? 'border-mid-autumn-festival text-mid-autumn-festival'
                : 'border-gray-400'
            } `}
          >
            {search === 'givral' ? <FaRegDotCircle /> : <FaRegCircle />}
            {lists[0].text}
          </Link>
        </li>
        <li className='col-span-3 max-md:col-span-6 max-sm:col-span-full'>
          <Link
            href={lists[1].href}
            className={`flex items-center gap-x-1 text-nowrap p-4  border-b-2 border-transparent rounded-t-lg ${
              search === 'brodard'
                ? 'border-mid-autumn-festival text-mid-autumn-festival'
                : 'border-gray-400'
            } `}
          >
            {search === 'brodard' ? <FaRegDotCircle /> : <FaRegCircle />}
            {lists[1].text}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SidebarProduct
