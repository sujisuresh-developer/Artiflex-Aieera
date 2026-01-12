import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "../components/Header"
import logo from "/logo.png"

gsap.registerPlugin(ScrollTrigger)

const serviceGroups = [
  {
    items: [
      "Dedicated Server",
      "Hosting",
      "Telecom Infrastructure Solutions",
      "Cloud Computing Services",
    ],
  },
  {
    items: [
      "DDoS Attacks Testing",
      "Website Hacking Testing",
      "Wireless Network Penetration Testing",
      "Social Engineering",
    ],
  },
  {
    items: [
      "Cybersecurity",
      "Vulnerability Assessment",
      "Compliance Assistance",
      "Penetration Testing",
    ],
  },
  {
    items: [
      "IAAS",
      "PAAS",
      "SAAS",
      "Virtual Private Servers",
      "Managed IT Infrastructure",
      "SOC",
    ],
  },
  {
    items: [
      "Managed Cloud Service",
      "Managed Email Security",
      "Managed Services Network & Security",
      "IT Maintenance",
      "24/7 Remote & On-Site Support",
      "Security & Compliance Management",
      "Backup & Disaster Recovery Solutions",
    ],
  },
]

const ServiceDetails = () => {
    
   
    useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", // change to "smooth" if you want
  })
}, [])

  const containerRef = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".sd-title", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(".sd-left", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      stagger: 0.15,
      ease: "power3.out",
    })

    // SIMPLE FADE FOR ITEMS
    gsap.fromTo(
      ".sd-pill",
      { opacity: 0 },
      {
        opacity: 2,
        duration: 2,
        delay: 1,
        ease: "power2.out",
       
      }
    )
  })

  return () => ctx.revert()
}, [])


  return (
    <>
    <Header />
    <section ref={containerRef} className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
        
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* PAGE TITLE */}
        <h1 className="sd-title text-5xl font-bold text-black mb-16">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-16">

          {/* LEFT CONTENT */}
          <div className="md:col-span-1 space-y-8">
            <p className="sd-left text-gray-600 text-lg leading-relaxed">
              Our comprehensive suite of services is customized specifically
              to help you effectively implement and manage these technologies,
              ensuring your company stays ahead of the curve.
            </p>

            <p className="sd-left text-blue-600 text-lg font-medium">
              Order a free consultation – our experts will select the most
              effective solution.
            </p>
            <img src={logo} alt="Artiflex IT" className="h-10 mx-auto w-50 h-50 " />
          </div>

          {/* RIGHT SERVICES */}
          <div className="md:col-span-2 space-y-12 sd-pills">
            {serviceGroups.map((group, index) => (
              <div key={index} className="border-t pt-8">
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className="sd-pill px-4 py-2 rounded-full border text-sm font-semibold text-black bg-white cursor-pointer transition hover:-translate-y-1 hover:shadow-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
    </>
  )
}


export default ServiceDetails
