import Header from "../components/Header"
import Footer from "../components/Footer"
import ServicePageWrapper from "../components/ServicePageWrapper"

const AMCServices = () => {
  return (
    <>
      <Header />

      <ServicePageWrapper>

        {/* HEADER SPACER */}
        <div className="h-[110px]" />

        {/* HERO SECTION */}
        <section
          className="relative h-[420px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXQlMjBzb2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70" />

          <div className="relative max-w-7xl mx-auto px-6 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">
              AMC Services
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Proactive maintenance and continuous IT support for business
              continuity.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-20">

            <p className="max-w-4xl text-gray-600 text-lg">
              Our AMC Services ensure your IT systems remain secure, stable,
              and efficient through preventive maintenance, rapid issue
              resolution, and continuous monitoring—minimizing downtime
              and operational risk.
            </p>

            {/* IMAGE + LIST */}
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* STAR BORDER IMAGE */}
              <div className="star-border">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f"
                  alt="AMC Services"
                  className="relative z-10 rounded-2xl shadow-xl bg-[#fdfdfd]"
                />
              </div>

              <ul className="space-y-4 text-gray-600">
                <li>✔ Preventive maintenance</li>
                <li>✔ Security updates & patching</li>
                <li>✔ Rapid incident resolution</li>
                <li>✔ Business continuity support</li>
                <li>✔ Reduced downtime & risk</li>
              </ul>
            </div>

          </div>
        </section>

      </ServicePageWrapper>

      <Footer />
    </>
  )
}

export default AMCServices
