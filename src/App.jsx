
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import ServiceDetails from './pages/ServiceDetails'
import Services from './pages/Services'

import AboutUs from './pages/AboutUs'
import InfrastructureSolutions from './pages/InfrastructureSolutions'
import ApplicationSecuritySolutions from './pages/ApplicationSecuritySolutions'
import CloudSolutions from './pages/CloudSolutions'
import AMCService from './pages/AMCService'
import ManagedServices from './pages/ManagedServices'
import CyberSecuritySolutions from './pages/CyberSecuritySolutions'
import Contact from './pages/Contact'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import FAQ from './pages/FAQ'
import ScrollToTop from './components/ScrollToTop'

function App() {
   const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500) //time

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }


  return (
    <>
       <ScrollToTop/>

    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutUs />} />

      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
       <Route path="/infrastructure-solutions" element={<InfrastructureSolutions />} />
       <Route path="/cyber-security-solutions" element={<CyberSecuritySolutions />} />
       <Route path="/application-security-solutions" element={<ApplicationSecuritySolutions />} />
       <Route path="/cloud-solutions" element={<CloudSolutions />} />
       <Route path="/amc-services" element={<AMCService />} />
       <Route path="/managed-services" element={<ManagedServices />} />
       <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

    </Routes>
     
    </>
  )
}

export default App
