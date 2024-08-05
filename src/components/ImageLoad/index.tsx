import Image from 'next/image'
import React from 'react'

export default function ImageLoad({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      quality={90}
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes='100%'
      style={{ display: 'block', width: '100%', height: 'auto' }}
    />
  )
}
