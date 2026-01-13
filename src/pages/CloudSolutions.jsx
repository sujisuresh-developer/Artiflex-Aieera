import Header from "../components/Header"
import Footer from "../components/Footer"

const CloudSolutions = () => {
  return (
    <>
      <Header />

      <section
        className="relative h-[420px] flex items-center bg-cover bg-center mt-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center ">
            Cloud Solutions
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Transform your business with smarter, scalable cloud solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          <p className="max-w-4xl text-gray-600 text-lg">
            We deliver end-to-end cloud solutions—from secure migration and
            deployment to optimization and ongoing management—enabling agility,
            scalability, and cost efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi_wBBbgA8wXrx24RYO5vPbHtStZUMJCdfg&s"
              className="rounded-2xl shadow-xl w-full"
            />

            <ul className="space-y-4 text-gray-600 mt-20">
              <li>✔ Cloud migration & modernization</li>
              <li>✔ Hybrid & multi-cloud strategies</li>
              <li>✔ Microsoft 365 & collaboration</li>
              <li>✔ Secure cloud architecture</li>
              <li>✔ Cost & performance optimization</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default CloudSolutions
