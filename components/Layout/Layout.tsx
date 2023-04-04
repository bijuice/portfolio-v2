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
        <title>Abdul's Portfolio</title>
      </Head>
      <Navbar />
      <main className="bg-primary flex flex-col items-center justify-center relative ">
        {children}
      </main>
    </>
  )
}
