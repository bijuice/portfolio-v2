import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="bg-primary flex flex-col items-center justify-center ">
      {children}
    </main>
  )
}
