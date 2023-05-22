import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import About from './components/About'
/* IMMAGINI */
import HeroIllustration from './assets/hero-img.svg'
import AboutIllustration from './assets/noi.svg'


function App() {
  return (
    <>
      <Navbar />
      <Hero immagine={HeroIllustration} />
      <Newsletter />
      <About immagine={AboutIllustration} />
    </>
  )
}

export default App
