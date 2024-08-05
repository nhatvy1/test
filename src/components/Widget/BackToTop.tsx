'use client'

import { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showBtn && window.scrollY > 400) {
        setShowBtn(true)
      } else if (showBtn && window.scrollY <= 400) {
        setShowBtn(false)
      }
    }
    window.addEventListener('scroll', checkScrollHeight)
    return () => {
      window.removeEventListener('scroll', checkScrollHeight)
    }
  }, [showBtn])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button
      className={`${
        showBtn ? 'flex' : 'hidden'
      } fixed bottom-2 right-1 w-[50px] h-[50px] bg-mid-autumn-festival shadow-contact p-2 rounded-lg border border-gray-300 flex items-center justify-center`}
      onClick={scrollToTop}
    >
      <MdOutlineKeyboardArrowUp size={24} className='text-white'/>
    </button>
  )
}

export default BackToTop
