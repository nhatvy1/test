import Link from 'next/link'
import { IProduct } from '@/types/product.type'
import Image from 'next/image'

interface Props {
  data: IProduct
  href: string
}

const CardProduct = ({ data, href }: Props) => {
  return (
    <div className='flex flex-col justify-between h-full pb-2'>
      <Link
        href={`${href}/${data.slug}-${data.id}`}
        className='h-[321px] bg-slate-200 group overflow-hidden'
      >
        <Image
          src='/cake-demo.jpg'
          width={280}
          height={321}
          alt={data?.name}
          className='w-full h-full group-hover:scale-105 duration-300'
        />
      </Link>
      <div
        className='p-[10px] flex flex-col justify-start gap-3'
        style={{ maxWidth: '80%' }}
      >
        <h3 className='font-medium'>{data.name}</h3>
      </div>
      <p className='mb-2 text-center'>
        <Link href='#' className='px-10 py-2 border rounded-full'>
          Liên hệ
        </Link>
      </p>
    </div>
  )
}

export default CardProduct
