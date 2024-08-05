import BreadCrumb from '@/components/commons/BreadCrumb'
import MainSection from '@/components/commons/MainSection'
import SidebarProduct from '@/components/commons/SidebarProduct'
import { ReactNode } from 'react'

const ProductLayout = ({
  children,
}: {
  children: ReactNode
}) => {

  return (
    <>{children}</>
  )
}

export default ProductLayout
