import { useState } from "react"
import { motion } from "framer-motion"

const services = [
  {
    name: "Infrastructure Solutions",
    intro:
      "Build a resilient, high-performance IT foundation that supports business growth and operational efficiency.",
    points: [
      "Enterprise-grade networking and cabling",
      "High availability & scalable infrastructure",
      "Secure, future-ready IT environments",
    ],
  },
  {
    name: "Cyber Security",
    intro:
      "Protect your business from evolving cyber threats with advanced, enterprise-grade security strategies.",
    points: [
      "Real-time threat detection & monitoring",
      "Network, endpoint & data protection",
      "Risk mitigation & compliance assurance",
    ],
  },
  {
    name: "Application Security",
    intro:
      "Secure every line of code and protect applications from vulnerabilities and cyber risks.",
    points: [
      "Secure SDLC & vulnerability testing",
      "Compliance-driven security frameworks",
      "Reliable & resilient applications",
    ],
  },
  {
    name: "Cloud Solutions",
    intro:
      "Unlock agility and scalability with secure, cloud-first infrastructure and services.",
    points: [
      "Cloud migration & optimization",
      "Hybrid & multi-cloud management",
      "Cost-efficient, scalable solutions",
    ],
  },
  {
    name: "Managed Services",
    intro:
      "Ensure seamless IT operations with proactive monitoring, maintenance, and expert support.",
    points: [
      "24/7 monitoring & incident response",
      "Reduced downtime & performance optimization",
      "Expert IT operations management",
    ],
  },
  {
    name: "AMC Services",
    intro:
      "Proactive IT maintenance and annual support services to ensure uptime and business continuity.",
    points: [
      "Preventive maintenance & support",
      "System health & performance checks",
      "Business-critical IT continuity",
    ],
  },
]

const clientLogos = [
  "/dubai-duty-free-seeklogo.png",
  "/28.png",
  "/idAIdoQlaN_1766401349277.png",
  "/idIu5Lf4Sf_1766399953051.png",
  "/idmHZx4yfP_logos.png",
  "/idMNWTiY7c_logos.png",
  "/idze5P5g5P_logos.png",
  "/LnW7oU12lP7gNmfZJtUdl05IXcB1736410981931_200x200.png"
]

const Services = () => {
  const [active, setActive] = useState(services[0])

  return (
    <section className="bg-white min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A comprehensive suite of IT services designed to help businesses
            innovate, secure, and scale with confidence.
          </p>
        </div>
      </div>

      {/* SERVICE SELECTOR */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              whileHover={{ y: -8 }}
              onClick={() => setActive(service)}
              className={`cursor-pointer rounded-2xl p-8 border transition
                ${active.name === service.name
                  ? "border-blue-600 bg-blue-50 shadow-xl"
                  : "bg-white hover:shadow-lg"
                }`}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.intro}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SERVICE DETAILS */}
      <motion.div
        key={active.name}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-50 py-28"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-6">
            {active.name}
          </h2>

          <p className="text-gray-600 max-w-4xl mb-12 text-lg">
            {active.intro}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {active.points.map((point) => (
              <div
                key={point}
                className="bg-white rounded-xl p-6 border shadow-sm"
              >
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <p className="mt-3 text-gray-700 text-sm">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-blue-600 rounded-2xl p-10 text-white text-center">
            <p className="text-lg mb-6">
              Order a free consultation — our experts will select the most
              effective solution for your business.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </motion.div>

      {/* CLIENT LOGOS */}
      {/* CLIENT LOGOS – PREMIUM STYLE */}
      <div className="py-28 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white mb-16">
            Trusted by Leading Organizations
          </h2>

          {/* ALWAYS 4 IN A ROW */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={i}

                /* 👇 animation ALWAYS runs when section is reached */
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}

                /* 👇 slower + smoother */
                transition={{
                  delay: i * 0.2,
                  duration: 0.9,
                  ease: "easeOut",
                }}

                whileHover={{ y: -8, scale: 1.05 }}

                className="
            flex items-center justify-center
            h-32 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-lg
            hover:bg-white/20
            transition
          "
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="max-h-14 max-w-[140px] object-contain grayscale hover:grayscale-0 transition"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>


    </section>
  )
}

export default Services
