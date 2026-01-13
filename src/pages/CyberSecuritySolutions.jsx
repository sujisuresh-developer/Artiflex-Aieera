import Header from "../components/Header"
import Footer from "../components/Footer"

const CyberSecuritySolutions = () => {
  return (
    <>
      <Header />

      <section
        className="relative h-[420px] flex items-center bg-cover bg-center mt-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/75" />
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center ">
            Cyber Security Solutions
          </h1>
          <p className="text-lg max-w-3xl text-blue-100 flex items-center justify-center">
            Fortify your business with enterprise-grade cyber security.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

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

          <div className="grid md:grid-cols-2 gap-16">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
              className="rounded-2xl shadow-xl"
            />

            <ul className="space-y-4 text-gray-600 mt-20">
              <li>✔ Firewall & network security</li>
              <li>✔ Endpoint protection & monitoring</li>
              <li>✔ Threat detection & incident response</li>
              <li>✔ Compliance & audit support</li>
              <li>✔ Security awareness & risk reduction</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default CyberSecuritySolutions
