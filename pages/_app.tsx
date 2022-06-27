import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Demo from '../components/Demo'
import News from '../components/News'
import Musics from '../components/Musics'
import Teams from '../components/Teams'
import SpecialThanks from '../components/SpecialThanks'
import Inquiry from '../components/Inquiry'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-screen">
        <Header />
        <Hero />
        <Demo />
        <News />
        <Musics />
        <Teams />
        <SpecialThanks />
        <Inquiry />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
