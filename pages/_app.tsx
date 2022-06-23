import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen hero bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">VIVACE</h1>
            <button className="m-10 btn btn-primary">
              Download on the App Store
            </button>
            <button className="m10 btn btn-primary">
              Get IT ON Google Play
            </button>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
