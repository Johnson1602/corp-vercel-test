import Link from 'next/link'

export default function Header() {
  return (
    <header className='absolute w-full px-6 py-4 text-white'>
      <nav className='flex flex-row gap-6'>
        <Link href='/' className='mr-auto'>
          Home
        </Link>
        <Link href='/performance'>Performance</Link>
        <Link href='/reliability'>Reliability</Link>
        <Link href='/scale'>Scale</Link>
      </nav>
    </header>
  )
}
