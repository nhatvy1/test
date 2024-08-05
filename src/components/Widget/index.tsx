import React from 'react'
import BackToTop from './BackToTop'
import Link from 'next/link'

export default function Widget() {
  return (
    <section>
      <div className='fixed bottom-2 left-3 z-[998]'>
        <Link
          href='https://zalo.me/0934127409'
          className='relative flex size-[50px]'
          target='_blank'
        >
          <span className='animate-ping absolute inline-flex size-[50px] rounded-full bg-mid-autumn-festival opacity-75'></span>
          <span className='relative inline-flex rounded-full size-[50px] bg-mid-autumn-festival border border-white text-white items-center justify-center'>
            Zalo
          </span>
        </Link>
      </div>
      <BackToTop />
    </section>
  )
}
