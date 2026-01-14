import Header from "../components/Header"
import Footer from "../components/Footer"
import ServicePageWrapper from "../components/ServicePageWrapper"

const ApplicationSecuritySolutions = () => {
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
              "url('https://images.unsplash.com/photo-1531498860502-7c67cf02f657')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/75" />

          <div className="relative max-w-7xl mx-auto px-6 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">
              Application Security Solutions
            </h1>
            <p className="max-w-3xl text-lg text-blue-100 mx-auto">
              Keep your applications secure, resilient, and compliant—no matter
              how complex your environment.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-20">

            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-4">
                Secure Every Line of Code. Protect Every Business Process.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                In today’s digital-first landscape, business applications are
                critical assets that power operations, productivity, and
                innovation. However, this importance also makes them prime
                targets for cyber threats.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our Application Security Solutions integrate security at every
                stage of the application lifecycle to proactively identify
                vulnerabilities, reduce risk, and ensure compliance—without
                slowing innovation.
              </p>
            </div>

            {/* IMAGE + CONTENT */}
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* STAR BORDER IMAGE */}
              <div className="star-border">
                <img
                  src="https://img.freepik.com/premium-photo/cyber-security-digital-data-protection-concept-uds_31965-346120.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Application Security"
                  className="relative z-10 rounded-2xl shadow-xl bg-[#fdfdfd]"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  End-to-End Application Protection
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li>✔ Secure application architecture design</li>
                  <li>✔ Protection against OWASP Top 10 vulnerabilities</li>
                  <li>✔ Continuous security testing & monitoring</li>
                  <li>✔ Secure APIs and third-party integrations</li>
                  <li>✔ Runtime protection for modern applications</li>
                </ul>
              </div>
            </div>

            {/* SDLC SECTION */}
            <div className="bg-blue-50 rounded-2xl p-12">
              <h3 className="text-3xl font-bold mb-6">
                Security Embedded in the Development Lifecycle
              </h3>
              <p className="text-gray-600 max-w-4xl mb-8">
                We embed security directly into your Software Development Life
                Cycle (SDLC) to identify and resolve risks early—before they
                reach production.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Secure coding standards",
                  "Static & dynamic code analysis",
                  "Vulnerability scanning & penetration testing",
                  "Continuous security validation",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white p-6 rounded-xl shadow-sm border"
                  >
                    <p className="font-semibold text-blue-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPLIANCE */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Compliance & Risk Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Our Application Security Solutions help organizations meet
                  industry and regulatory requirements while reducing
                  operational and reputational risk.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>✔ ISO, SOC, and regulatory compliance support</li>
                  <li>✔ Secure data handling & privacy controls</li>
                  <li>✔ Audit-ready security documentation</li>
                  <li>✔ Ongoing risk assessment & remediation</li>
                </ul>
              </div>

              <div className="star-border">
                <img
                  src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81"
                  alt="Compliance"
                  className="relative z-10 rounded-2xl shadow-xl bg-[#fdfdfd]"
                />
              </div>
            </div>

          </div>
        </section>

      </ServicePageWrapper>

      <Footer />
    </>
  )
}

export default ApplicationSecuritySolutions
