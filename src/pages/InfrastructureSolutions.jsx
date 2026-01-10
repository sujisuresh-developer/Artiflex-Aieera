

import { useEffect } from "react"
import gsap from "gsap"
import CloudBackground from "../components/CloudBackground"
import Benefits3D from "../components/Benefits3D"
import Header from "../components/Header"
import Footer from "../components/Footer"


const InfrastructureSolutions = () => {

  
  useEffect(() => {
  const clouds = gsap.utils.toArray(".cloud")

  const move = (x, y) => {
    clouds.forEach((cloud, i) => {
      gsap.to(cloud, {
        x: x * (i + 1) * 10,
        y: y * (i + 1) * 10,
        duration: 1.5,
        ease: "power3.out",
      })
    })
  }

  const onMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    move(x, y)
  }

  const onTouchMove = (e) => {
    if (!e.touches[0]) return
    const x = (e.touches[0].clientX / window.innerWidth - 0.5) * 2
    const y = (e.touches[0].clientY / window.innerHeight - 0.5) * 2
    move(x, y)
  }

  window.addEventListener("mousemove", onMouseMove)
  window.addEventListener("touchmove", onTouchMove)

  return () => {
    window.removeEventListener("mousemove", onMouseMove)
    window.removeEventListener("touchmove", onTouchMove)
  }
}, [])

  return (
    <>
    <Header/>
    
    <section className="relative bg-white min-h-screen overflow-hidden">
      <CloudBackground/>

      
    

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-20">


        {/* TITLE */}
        <div>
          <h1 className="text-5xl font-bold text-black mb-4">
            Infrastructure Solutions
          </h1>
          <p className="text-gray-600 text-lg">
            We offer our broad categories of services in its best Network
          </p>
        </div>

        {/* INTRO */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Choose the best Infrastructure Solutions
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed">
            Our Infrastructure Solutions are designed to improve your
            organization’s networking infrastructure to the next level.
            We begin by conducting a comprehensive analysis of your current
            network setup, examining performance, reliability, and security.
          </p>
        </div>

        {/* BENEFITS */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Business Benefits
          </h3>
        <Benefits3D/>

        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-xl p-8">
          <p className="text-blue-700 font-medium text-lg">
            Order a free consultation – our experts will select the most
            effective solution
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Questions & Answers
          </h3>

          <p className="text-gray-600 mb-4">
            Optimizing your IT infrastructure is key to ensuring seamless
            business operations. Here we answer common questions about
            upgrading, managing, and securing your IT environment.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">
                Why is infrastructure optimization important?
              </h4>
              <p className="text-gray-600">
                It improves performance, enhances security, and minimizes
                downtime.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Can infrastructure scale with business growth?
              </h4>
              <p className="text-gray-600">
                Yes, our solutions are designed to grow with your business.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <Footer/>
    
    </>
  )
}

export default InfrastructureSolutions
