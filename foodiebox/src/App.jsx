import './App.css'
/* COMPONENTS */
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import About from './components/About'
import Plans from './components/Plans'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
/* IMGS */
import HeroIllustration from './assets/hero-img.svg'
import AboutIllustration from './assets/noi.svg'


function App() {
  return (
    <>
      <Navbar />
      <Hero immagine={HeroIllustration} />
      <Newsletter />
      <About immagine={AboutIllustration} />
      <Plans />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
