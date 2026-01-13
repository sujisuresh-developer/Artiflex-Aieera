import Header from "../components/Header"
import Footer from "../components/Footer"

const AboutUs = () => {
  return (
    <>
      <Header />

      <section className="bg-[#fdfdfd] min-h-screen mt-[110px]">

        {/* HERO */}
        <div
          className="relative h-[360px] flex items-center justify-center bg-center bg-cover w-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70" />
          <h1 className="relative text-white text-5xl font-bold">
            About Us
          </h1>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

          {/* INTRO SECTION */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              We make sure your IT works for you
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We develop custom IT solutions tailored to your unique business needs,
              ensuring efficiency, scalability, and security at every stage.
              Our approach focuses on building reliable systems that support daily
              operations while preparing your business for future growth.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              By choosing Artiflex IT, you gain a dedicated technology partner
              committed to understanding your challenges and delivering solutions
              that truly fit.
            </p>
          </div>

          {/* IMAGE ROW (LIKE DESIGN) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
              "https://images.unsplash.com/photo-1556761175-4b46a572b786",
              "https://images.unsplash.com/photo-1531498860502-7c67cf02f657",
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Team work"
                className="rounded-2xl object-cover w-full h-56"
              />
            ))}
          </div>

          {/* SECTION 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="IT Infrastructure"
              className="rounded-3xl shadow-xl"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4">
                IT Infrastructure Management
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Build a reliable IT foundation for smooth operations.
                Artiflex IT designs and manages secure, high-performance
                infrastructure tailored to your business.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From system setup to ongoing maintenance, we ensure everything
                runs efficiently so your team can stay focused on what matters.
              </p>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Cybersecurity & Protection
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Keep your business secure from modern threats.
                Safeguard your data, devices, and network with advanced
                endpoint protection, firewalls, and security monitoring.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Artiflex IT helps you stay protected with proactive defense
                and real-time threat response.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7"
              alt="Cybersecurity"
              className="rounded-3xl shadow-xl"
            />
          </div>

          {/* SECTION 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1677529498680-fdb9d5ee762a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwd29ya3BsYWNlfGVufDB8fDB8fHww"
              alt="Cloud Solutions"
              className="rounded-3xl shadow-xl"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Cloud & Modern Workplace
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Work smarter with cloud collaboration tools.
                Boost productivity with Microsoft 365, Teams, OneDrive,
                secure email, and cloud backup solutions.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Perfect for hybrid and remote teams, enabling seamless
                communication and real-time collaboration.
              </p>
            </div>
          </div>

          {/* FEATURE STRIP */}
          <div className="bg-blue-50 rounded-3xl p-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
              {[
                {
                  title: "Smart System Optimization",
                  desc: "Enhance stability and performance with proactive monitoring and updates.",
                },
                {
                  title: "Unified IT Overview",
                  desc: "Clear visibility of your network, devices, security, and performance.",
                },
                {
                  title: "Seamless Team Support",
                  desc: "Fast response, real-time assistance, and reliable IT management.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutUs
