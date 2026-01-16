import Header from "../components/Header"
import Footer from "../components/Footer"
import ServicePageWrapper from "../components/ServicePageWrapper"
import serv1 from "../assets/service1.jpeg"

const InfrastructureSolutions = () => {
  return (
    <>
      <Header />

      <ServicePageWrapper>

        {/* HERO */}
        <section
          className="relative h-[420px] bg-cover bg-center flex items-center  "
          style={{
            backgroundImage:
              "url('https://png.pngtree.com/thumb_back/fh260/background/20241210/pngtree-person-engaging-with-a-cloud-computing-diagram-explaining-cloud-based-solutions-image_16678313.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/70" />

          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto px-6 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">
              Infrastructure Solutions
            </h1>
            <p className="max-w-3xl text-lg text-blue-100">
              Build a reliable IT foundation that ensures performance,
              scalability, and business continuity.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24 ">
          <div className="max-w-7xl mx-auto px-6 space-y-20">

            {/* INTRO */}
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-4">
                Choose the Best Infrastructure Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Infrastructure Solutions are designed to elevate your
                organization’s networking and IT environment. We begin with
                a comprehensive assessment of your existing infrastructure,
                analyzing performance, reliability, and security.
              </p>
            </div>

            {/* SECTION */}
            <div className="grid md:grid-cols-2 gap-14 items-center">
              {/* STAR BORDER IMAGE */}
              <div className="star-border">
                <img
                  src={serv1}
                  alt="IT Infrastructure"
                  className="
        relative z-10
        rounded-2xl
        bg-[#fdfdfd]
        shadow-xl
      "
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  IT Infrastructure Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Artiflex IT designs and manages secure, high-performance
                  infrastructure tailored to your business needs.
                </p>

                <ul className="space-y-3 text-gray-600">
                  <li>✔ Enterprise-grade networking</li>
                  <li>✔ Server & data center management</li>
                  <li>✔ High availability & scalability</li>
                  <li>✔ Proactive monitoring & maintenance</li>
                </ul>
              </div>
            </div>


          </div>
        </section>

      </ServicePageWrapper>

      <Footer />
    </>
  )
}

export default InfrastructureSolutions
