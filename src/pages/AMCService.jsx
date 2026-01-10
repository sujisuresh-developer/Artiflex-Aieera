import Header from "../components/Header"
import Benefits3D from "../components/Benefits3D"
import CloudBackground from "../components/CloudBackground"

const AMCService = () => {
  return (
    <>
      <Header />

      <section className="relative bg-white min-h-screen overflow-hidden pt-[1px]">
        <CloudBackground/>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-20">

          {/* TITLE */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-4">
                AMC Services
              </h1>
              <p className="text-gray-600 text-lg">
                Proactive IT support and maintenance solutions to ensure uptime,
                security, and business continuity.
              </p>
            </div>

            {/* IMAGE (FROM HOME PAGE SET) */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://artiflexit.com/wp-content/uploads/2025/04/Website-Mockup-1.webp"
                alt="AMC Services"
                className="w-[280px] md:w-[360px] rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Proactive IT Support
            </h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed">
              Artiflex IT offers comprehensive AMC Services designed to keep
              your IT infrastructure running smoothly. With proactive
              monitoring, regular updates, preventive maintenance, and
              disaster recovery planning, we ensure minimal downtime,
              improved performance, and uninterrupted business operations—so
              you can focus on driving growth with confidence.
            </p>
          </div>

          {/* BUSINESS BENEFITS */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Business Benefits
            </h3>

            <Benefits3D
              items={[
                "24/7 monitoring and proactive IT support",
                "Reduced downtime and faster issue resolution",
                "Improved system performance and reliability",
                "Business continuity with backup & disaster recovery",
              ]}
            />
          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-blue-700 font-medium text-lg">
              Order a free consultation – our experts will select the most
              effective AMC solution for your business
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Questions & Answers
            </h3>

            <p className="text-gray-600 mb-4 max-w-4xl">
              Our AMC Services provide comprehensive support and maintenance
              to ensure your IT systems remain secure, stable, and efficient.
              Explore our Q&A to gain a deeper understanding of how our AMC
              solutions empower businesses to make informed IT decisions with
              confidence.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">
                  What does AMC Services include?
                </h4>
                <p className="text-gray-600">
                  AMC Services include proactive monitoring, regular system
                  maintenance, security updates, issue resolution, and
                  disaster recovery support to ensure continuous operations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  How do AMC Services improve business continuity?
                </h4>
                <p className="text-gray-600">
                  By preventing system failures, minimizing downtime, and
                  providing rapid support, AMC Services help maintain stable
                  and uninterrupted business operations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AMCService
