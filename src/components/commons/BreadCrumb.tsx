import Link from 'next/link'
import MainSection from './MainSection'

interface Props {
  breadCrumb: {
    text: string
    href: string
  }[]
}

const BreadCrumb = ({ breadCrumb }: Props) => {
  return (
    <MainSection className='py-10' bgColor='bg-transparent'>
      <ul className='flex items-center gap-x-2 text-white'>
        <li>
          <Link href='/'>
            Trang chủ <span>/</span>
          </Link>
        </li>
        {breadCrumb?.map((item, index) => (
          <li key={index} className='group'>
            <Link href={item.href}>
              {item.text} <span className='group-last:hidden'>/</span>
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  )
}

export default BreadCrumb
