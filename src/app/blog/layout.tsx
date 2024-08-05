import BreadCrumb from '@/components/commons/BreadCrumb'
import MainSection from '@/components/commons/MainSection'
import { ReactNode } from 'react'

const BlogLayout = ({ children }: { children: ReactNode }) => {
  const breadCrumb = [
    {
      text: 'Blogs',
      href: '/san-pham'
    }
  ]

  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb}/>
      <MainSection className='bg-white'>
        {children}
      </MainSection>
    </>
  )
}

export default BlogLayout
