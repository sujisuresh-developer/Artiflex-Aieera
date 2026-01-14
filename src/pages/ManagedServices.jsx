import Header from "../components/Header"
import Footer from "../components/Footer"
import ServicePageWrapper from "../components/ServicePageWrapper"

const ManagedServices = () => {
  return (
    <>
      <Header />

      <ServicePageWrapper>

        {/* HEADER SPACER (for fixed header height) */}
        <div className="h-[110px]" />

        {/* HERO SECTION */}
        <section
          className="relative h-[420px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70" />

          <div className="relative max-w-7xl mx-auto px-6 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">
              Managed Services
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Expert guidance tailored to drive growth and operational excellence.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-20">

            <p className="max-w-4xl text-gray-600 text-lg">
              Our Managed Services empower businesses with proactive IT
              management, continuous monitoring, expert support, and strategic
              planning—so you can focus on innovation while we handle the
              complexity.
            </p>

            {/* IMAGE + LIST */}
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* STAR BORDER IMAGE */}
              <div className="star-border">
                <img
                  src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81"
                  alt="Managed IT Services"
                  className="relative z-10 rounded-2xl shadow-xl bg-[#fdfdfd]"
                />
              </div>

              <ul className="space-y-4 text-gray-600">
                <li>✔ 24/7 monitoring & support</li>
                <li>✔ Performance & stability optimization</li>
                <li>✔ IT strategy & roadmap planning</li>
                <li>✔ Cost control & efficiency</li>
                <li>✔ Seamless team support</li>
              </ul>
            </div>

          </div>
        </section>

      </ServicePageWrapper>

      <Footer />
    </>
  )
}

export default ManagedServices
