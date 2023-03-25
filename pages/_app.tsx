import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Eczar} from "next/font/google"

const eczar = Eczar({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return <>
      <style jsx global>{`
        h1,h2,h3 {
          font-family: ${eczar.style.fontFamily};
        }
      `}</style>
  <Component {...pageProps} />
  </>
}
