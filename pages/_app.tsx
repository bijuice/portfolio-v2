import Layout from "@/components/layout/Layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Raleway } from "next/font/google"
import { Comfortaa } from "next/font/google"

const headingFont = Raleway({ subsets: ["latin"] })
const baseFont = Comfortaa({ subsets: ["latin"] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${baseFont.style.fontFamily};
        }

        h1,
        h2,
        h3 {
          font-family: ${headingFont.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
