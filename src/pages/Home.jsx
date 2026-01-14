import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

import Services from "./Services"
import Industries from "../components/Industries"
import WhyChooseUs from "../components/WhyChooseUs"
import LogoAutoScroll from "../components/LogoAutoScroll"

import AlternateSection from "../components/AlternateSection"

const Home = () => {
  return (
    <>
      <Header />

      {/* HERO (NO CHANGE) */}
      <Hero />

      {/* ALTERNATING SECTIONS */}
      <AlternateSection index={0}>
        <Services />
      </AlternateSection>

      <AlternateSection index={1}>
        <Industries />
      </AlternateSection>

      <AlternateSection index={2}>
        <WhyChooseUs />
      </AlternateSection>

      <AlternateSection index={3}>
        <LogoAutoScroll />
      </AlternateSection>

      <Footer />
    </>
  )
}

export default Home
