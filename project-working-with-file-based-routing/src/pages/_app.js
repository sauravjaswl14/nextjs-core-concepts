import '@/styles/globals.css'

import { Lato } from 'next/font/google'


const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'], })

export default function App({ Component, pageProps }) {
  return <main className={lato.className}>
    <Component {...pageProps} />

  </main>
}
