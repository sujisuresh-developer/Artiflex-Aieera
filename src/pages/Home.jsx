

import BackgroundMotion from "../components/BackgroundMotion"

import Footer from "../components/Footer"
import GlobalParallax from "../components/GlobalParallax"
import Header from "../components/Header"
import Hero from "../components/Hero"

import Industries from "../components/Industries"


import WhyChooseUs from "../components/WhyChooseUs"
import Services from "./Services"

const Home = () => {
  return (
    <>
    <Header/>
    <BackgroundMotion />
      <GlobalParallax />
     

    
    

    
        <Hero />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Footer/>
    
      
    </>
  )
}

export default Home
