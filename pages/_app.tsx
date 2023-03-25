import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Eczar } from "next/font/google"
import { Edu_SA_Beginner } from "next/font/google"

const eczar = Eczar({ subsets: ["latin"] })
const shantell_Sans = Edu_SA_Beginner({ subsets: ["latin"] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${shantell_Sans.style.fontFamily};
        }

        h1,
        h2,
        h3 {
          font-family: ${eczar.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
