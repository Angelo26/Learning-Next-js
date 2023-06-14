// import Image from 'next/image'

import Link from "next/link";
export default function Home() {
    return (
      <>
        this is second page.
        <nav>
            <Link href={`/about/first`}>first page</Link>
            <Link href={`/about/second`}>second page</Link>
            <Link href={`/about/third`}>third page</Link>
        </nav>
      </>
    )
  }
  