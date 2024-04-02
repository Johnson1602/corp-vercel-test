import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface HeroProps {
  imgUrl: StaticImageData
  imgAlt: string
  title: string
}

export default function Hero(props: HeroProps) {
  const { imgUrl, imgAlt, title } = props

  return (
    <div className='relative flex justify-center items-center h-screen'>
      <h1 className='mx-8 text-4xl text-white text-center md:text-2xl'>
        {title}
      </h1>
      <div className='absolute -z-10 inset-0'>
        <Image
          src={imgUrl}
          alt={imgAlt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900' />
      </div>
    </div>
  )
}
