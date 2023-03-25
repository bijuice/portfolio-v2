import Layout from "@/components/Layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Eczar } from "next/font/google"
import { Comfortaa } from "next/font/google"

const serifFont = Eczar({ subsets: ["latin"] })
const sansSerifFont = Comfortaa({ subsets: ["latin"] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sansSerifFont.style.fontFamily};
        }

        h1,
        h2,
        h3 {
          font-family: ${serifFont.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
