import Header from "../components/Header"
import Footer from "../components/Footer"
import ServicePageWrapper from "../components/ServicePageWrapper"
import serv2 from "../assets/service2.jpeg"

const CyberSecuritySolutions = () => {
  return (
    <>
      <Header />

      <ServicePageWrapper>

        {/* HEADER SPACER (FIX FOR FIXED HEADER) */}
        <div className="h-[110px]" />

        {/* HERO */}
        <section
          className="relative h-[420px] flex items-center bg-cover bg-center -mt-28"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/75" />

          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto px-6 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">
              Cyber Security Solutions
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-blue-100">
              Fortify your business with enterprise-grade cyber security.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-20">

            {/* INTRO */}
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-4">
                Protect Against Modern Threats
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Cyber Security Solutions identify vulnerabilities, monitor
                threats in real time, and implement proactive controls to protect
                systems, networks, and sensitive data.
              </p>
            </div>

            {/* IMAGE + LIST */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="star-border">
                <img
                  src={serv2}
                  alt="Cyber Security"
                  className="rounded-2xl shadow-xl relative z-10 bg-[#fdfdfd]"
                />
              </div>

              <ul className="space-y-4 text-gray-600">
                <li>✔ Firewall & network security</li>
                <li>✔ Endpoint protection & monitoring</li>
                <li>✔ Threat detection & incident response</li>
                <li>✔ Compliance & audit support</li>
                <li>✔ Security awareness & risk reduction</li>
              </ul>
            </div>

          </div>
        </section>

      </ServicePageWrapper>

      <Footer />
    </>
  )
}

export default CyberSecuritySolutions
