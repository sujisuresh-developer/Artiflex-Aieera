import Header from "../components/Header"
import Footer from "../components/Footer"
import ServicePageWrapper from "../components/ServicePageWrapper"

const CloudSolutions = () => {
  return (
    <>
      <Header />

      <ServicePageWrapper>

        {/* HEADER SPACER (for fixed header) */}
        <div className="h-[110px]" />

        {/* HERO SECTION */}
        <section
          className="relative h-[420px] flex items-center bg-cover bg-center -mt-28"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70" />

          <div className="relative max-w-7xl mx-auto px-6 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">
              Cloud Solutions
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Transform your business with smarter, scalable cloud solutions.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-20">

            <p className="max-w-4xl text-gray-600 text-lg">
              We deliver end-to-end cloud solutions—from secure migration and
              deployment to optimization and ongoing management—enabling
              agility, scalability, and cost efficiency.
            </p>

            {/* IMAGE + LIST */}
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* STAR BORDER IMAGE */}
              <div className="star-border">
                <img
                  src="https://www.computersciencedegreehub.com/wp-content/uploads/2022/06/cloud-computing.jpg"
                  alt="Cloud Solutions"
                  className="relative z-10 rounded-2xl shadow-xl bg-[#fdfdfd] w-full"
                />
              </div>

              <ul className="space-y-4 text-gray-600">
                <li>✔ Cloud migration & modernization</li>
                <li>✔ Hybrid & multi-cloud strategies</li>
                <li>✔ Microsoft 365 & collaboration</li>
                <li>✔ Secure cloud architecture</li>
                <li>✔ Cost & performance optimization</li>
              </ul>
            </div>

          </div>
        </section>

      </ServicePageWrapper>

      <Footer />
    </>
  )
}

export default CloudSolutions
