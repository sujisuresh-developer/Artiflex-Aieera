import Header from "../components/Header"
import Footer from "../components/Footer"

const InfrastructureSolutions = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative h-[420px] bg-cover bg-center flex items-center mt-28 "
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20241210/pngtree-person-engaging-with-a-cloud-computing-diagram-explaining-cloud-based-solutions-image_16678313.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative max-w-7xl mx-auto px-6 text-white ">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center ">
            Infrastructure Solutions
          </h1>
          <p className="max-w-3xl text-lg text-blue-100">
            Build a reliable IT foundation that ensures performance,
            scalability, and business continuity.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#fdfdfd] py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">
              Choose the Best Infrastructure Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our Infrastructure Solutions are designed to improve your
              organization’s networking infrastructure to the next level.
              We begin with a complete assessment of your existing environment,
              analyzing performance, security, and reliability.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              className="rounded-2xl shadow-xl"
              alt="IT Infrastructure"
            />

            <div>
              <h3 className="text-2xl font-bold mb-4">
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

      <Footer />
    </>
  )
}

export default InfrastructureSolutions
