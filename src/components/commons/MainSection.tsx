import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  bgColor?: string
}

const MainSection = ({ children, className, bgColor }: Props) => {
  const classNameCus = className ? className : ''
  const bgColorCus = bgColor ? bgColor : ''
  return (
    <div className={`w-full py-10 px-[15px] ${classNameCus} ${bgColorCus}`}>
      <div
        className={`min-[1200px]:max-w-screen-container-custom min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] mx-auto`}
      >
        {children}
      </div>
    </div>
  )
}

export default MainSection
