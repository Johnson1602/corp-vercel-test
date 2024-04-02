import Image from 'next/image'
import homeImage from '@public/home.jpg'

export default function HomePage() {
  return (
    <main className='absolute -z-10 inset-0'>
      <h1>Home Page</h1>
      <Image
        src={homeImage}
        alt='car factory'
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </main>
  )
}
