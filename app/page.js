// import Image from 'next/image'

import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      Hello Next.js, First page
      <Button />
      <nav>
        <Link href="/about">second page</Link>
      </nav>
    </>
  )
}
