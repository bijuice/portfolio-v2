import Head from "next/head"
import { ReactNode } from "react"
import Navbar from "./Navbar"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Abdul&#39;s Portfolio</title>
      </Head>
      <main className="w-full flex justify-center ">{children}</main>
    </>
  )
}
