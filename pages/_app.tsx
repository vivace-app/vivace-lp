import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Hero from '../components/Hero'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-screen">
        <Header />
        <Hero />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
