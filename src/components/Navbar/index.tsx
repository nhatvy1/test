'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RiPhoneFill } from 'react-icons/ri'
import { CiFacebook } from 'react-icons/ci'
import { PiTwitterLogoThin } from 'react-icons/pi'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { IoSearchOutline } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { useState } from 'react'
import NavItem from './NavItem'
import useCartStore from '@/stores/cart.store'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { quantity } = useCartStore()

  const listContact = [
    {
      href: '#',
      icon: CiFacebook
    },
    {
      href: '#',
      icon: PiTwitterLogoThin
    },
    {
      href: '#',
      icon: PiYoutubeLogoLight
    },
    {
      href: '#',
      icon: PiInstagramLogoThin
    }
  ]

  const listMenu = [
    {
      id: 1,
      title: 'Sản phẩm',
      subMenu: [
        {
          title: 'Bánh trung thu Givral',
          href: '/san-pham?type=givral'
        },
        {
          title: 'Bánh trung thu Brodard',
          href: '/san-pham?type=brodard'
        }
      ]
    },
    {
      id: 2,
      title: 'Combo',
      subMenu: [
        {
          title: 'Bánh trung thu Givral',
          href: '/combo?type=givral'
        },
        {
          title: ' Bánh trung thu Brodard',
          href: '/combo?type=brodard'
        }
      ]
    },
    {
      id: 3,
      title: 'Bảng giá',
      href: '#'
    },
    {
      id: 4,
      title: 'Về chúng tôi',
      subMenu: [
        {
          title: 'Giới thiệu',
          href: '/gioi-thieu'
        },
        {
          title: 'Liên hệ',
          href: '/lien-he'
        }
      ]
    },
    {
      id: 5,
      title: 'Blog',
      href: '/blog'
    }
  ]

  const handleOpenMenu = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header className='bg-white'>
      <div className='flex flex-wrap max-md:gap-y-3 items-center py-4 px-5'>
        <div className='basis-1/3 max-md:basis-full'>
          <Link
            href='#'
            className='flex items-center max-md:justify-center gap-x-1'
          >
            <span className='flex items-center justify-center size-[25px] bg-mid-autumn-festival rounded-full'>
              <RiPhoneFill size={16} className='text-white' />
            </span>
            <span>093 412 7409</span>
          </Link>
        </div>
        <div className='basis-1/3 max-md:basis-full flex justify-center'>
          <div className='w-[150px]'>
            <Link href='/'>
              <Image
                src='/logo_givral_mooncake.svg'
                alt='logo-banh-trung-thu-givral'
                width={100}
                height={100}
                className='w-full h-auto'
              />
            </Link>
          </div>
        </div>
        <div className='basis-1/3 max-md:basis-full'>
          <ul className='flex items-center gap-3 max-md:gap-6 md:justify-end justify-center'>
            {listContact.map((item, index) => (
              <li key={index}>
                <Link href='#'>
                  <item.icon size={24} className='text-gray-light' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='border-t px-5 max-md:py-3'>
        <nav className='flex items-center'>
          <div className='flex-1  flex items-center md:justify-center'>
            <div className='md:hidden cursor-pointer' onClick={handleOpenMenu}>
              <HiOutlineBars3 size={30} />
            </div>
            <div
              className={`${
                isOpen
                  ? 'max-md:fixed max-md:block top-0 left-0 max-md:h-screen max-md:w-full backdrop-brightness-50 bg-black/10 z-[998]'
                  : 'hidden'
              }`}
            ></div>
            <ul
              className={`flex max-md:flex-col items-center uppercase md:gap-3 max-md:fixed top-0 ${
                isOpen ? 'right-0' : '-right-full'
              } duration-500 max-md:h-[100vh] max-md:w-4/5 bg-white z-[999]`}
            >
              <li className='md:hidden flex items-center justify-between w-full p-4'>
                <p className='text-2xl'>Menu</p>
                <IoMdClose
                  size={35}
                  className='text-gray-light cursor-pointer'
                  onClick={() => handleClose()}
                />
              </li>
              {listMenu.map((item) => (
                <NavItem item={item} key={item.id} onClose={handleClose} />
              ))}
            </ul>
          </div>
          <div className='flex items-center gap-x-3'>
            <div>
              <IoSearchOutline size={22} />
            </div>
            <Link href='/gio-hang' className='flex items-center'>
              <MdOutlineShoppingCart size={22} /> 
              <p className='text-mid-autumn-festival'>({quantity})</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
