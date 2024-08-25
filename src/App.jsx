import './App.css'
import { Element } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="analytics">
        <Analytics />
      </Element>
      <Element name="newsletter">
        <Newsletter />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  )
}

export default App
