'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const NavItem = ({ item, onClose }: { item: any; onClose: any }) => {
  const [isOpenSubMenu, setIsOpenSubmenu] = useState(false)

  const handleClose = () => {
    setIsOpenSubmenu(false)
    onClose()
  }

  return (
    <li key={item.id} className='group relative max-md:w-full'>
      {item.href ? (
        <Link
          href={item.href}
          className='flex items-center p-4 text-gray-medium hover:text-mid-autumn-festival cursor-pointer'
          onClick={() => handleClose()}
        >
          {item.title} {item.subMenu && <IoMdArrowDropdown />}
        </Link>
      ) : (
        <p
          className='flex items-center p-4 text-gray-medium hover:text-mid-autumn-festival cursor-pointer'
          onClick={() => setIsOpenSubmenu(!isOpenSubMenu)}
        >
          {item.title} {item.subMenu && <IoMdArrowDropdown />}
        </p>
      )}
      {item.subMenu && (
        <ul
          className={`hidden ${
            isOpenSubMenu ? 'max-md:block' : ''
          } md:group-hover:block md:absolute
                      top-full bg-white md:shadow-lg md:border max-md:pl-4 border-slate-300 text-gray-medium z-[999]`}
        >
          {item.subMenu.map((itemSub: any, index: number) => (
            <li key={index} className='min-w-52 hover:text-mid-autumn-festival' onClick={() => handleClose()}>
              <Link
                href={itemSub.href}
                className='block w-full py-2 px-4 text-nowrap'
              >
                {itemSub.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavItem
