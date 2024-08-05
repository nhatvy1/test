import Link from 'next/link'

const Pagination = ({ slug = '1' }: { slug: string | undefined }) => {
  return (
    <div className='mt-5'>
      <ul className='flex items-center'>
        <li>
          <Link
            href='/san-pham?slug=1'
            className={`h-[50px] w-[50px] flex items-center justify-center text-xl ${
              slug === '1' ? 'text-white bg-blue-500' : 'bg-white'
            }`}
          >
            1
          </Link>
        </li>
        <li>
          <Link
            href='/san-pham?slug=2'
            className={`h-[50px] w-[50px] flex items-center justify-center text-xl ${
              slug === '2' ? 'text-white bg-blue-500' : 'bg-white'
            }`}
          >
            2
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
