import { Fragment } from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Fragment>
      <header>
        <nav>
          <Link href='/performance'>Performance</Link>
          <Link href='/reliability'>Reliability</Link>
          <Link href='/scale'>Scale</Link>
        </nav>
      </header>

      <h1>Home Page</h1>
    </Fragment>
  )
}
