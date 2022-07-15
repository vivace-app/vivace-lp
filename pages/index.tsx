import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Demo from '../components/Demo'
import News from '../components/News'
import Musics from '../components/Musics'
import Teams from '../components/Teams'
import SpecialThanks from '../components/SpecialThanks'
import Inquiry from '../components/Inquiry'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Demo />
      <News />
      <Musics />
      <Teams />
      <SpecialThanks />
      <Inquiry />
    </>
  )
}

export default Home
