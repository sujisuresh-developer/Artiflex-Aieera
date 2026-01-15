import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

import Services from "./Services"
import Industries from "../components/Industries"
import WhyChooseUs from "../components/WhyChooseUs"
import LogoAutoScroll from "../components/LogoAutoScroll"
import TechGlowSection from "../components/TechGlowSection"


const Home = () => {
  return (
    <>
      <Header />

      {/* HERO (NO CHANGE) */}
      <Hero />

      {/* techglow for that home page bg. */}
      <TechGlowSection>
     
        <Services />
      

     
        <Industries />
    

      
        <WhyChooseUs />
     

      
        <LogoAutoScroll />
        </TechGlowSection>
    

      <Footer />
    </>
  )
}

export default Home
