import Header from "../components/Header"
import Benefits3D from "../components/Benefits3D"
import CloudBackground from "../components/CloudBackground"

const CloudSolutions = () => {
  return (
    <>
      <Header />

      <section className="relative bg-white min-h-screen overflow-hidden pt-[5px]">
        <CloudBackground/>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-20">

          {/* TITLE */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-4">
                Cloud Solutions
              </h1>
              <p className="text-gray-600 text-lg">
                Empowering Your Business Through Smart, Scalable Cloud
                Transformation
              </p>
            </div>

            {/* IMAGE (FROM HOME PAGE) */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXSPlvtV8mt1KdZ0G0oEMu1QPndEBxFYp8A&s"
                alt="Cloud Solutions"
                className="w-[280px] md:w-[360px] rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Business with Smarter Cloud Solutions
            </h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed">
              Cloud computing has revolutionized how businesses manage data
              and infrastructure. At Artiflex IT, we deliver end-to-end Cloud
              Solutions—from secure migration and deployment to optimization
              and ongoing management—helping organizations enhance agility,
              innovation, and growth with scalable, future-ready cloud
              environments.
            </p>
          </div>

          {/* BUSINESS BENEFITS */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Business Benefits
            </h3>

            <Benefits3D
              items={[
                "Scalable cloud infrastructure for business growth",
                "Improved agility and operational efficiency",
                "Enhanced cloud security and data protection",
                "Optimized costs with flexible cloud resources",
              ]}
            />
          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-blue-700 font-medium text-lg">
              Order a free consultation – our experts will select the most
              effective Cloud solution for your business
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Questions & Answers
            </h3>

            <p className="text-gray-600 mb-4 max-w-4xl">
              The cloud is the future—make the most of it. Whether you are
              migrating, optimizing, or securing your cloud environment, our
              Cloud Solutions provide the expertise you need. Explore our Q&A
              to learn how we help organizations succeed in their cloud
              transformation journey.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">
                  Do you support cloud migration and optimization?
                </h4>
                <p className="text-gray-600">
                  Yes, we provide complete cloud migration services along with
                  performance optimization to ensure efficiency, security,
                  and minimal disruption.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  How do Cloud Solutions improve scalability?
                </h4>
                <p className="text-gray-600">
                  Cloud infrastructure allows businesses to scale resources
                  up or down on demand, enabling flexibility, cost control,
                  and faster innovation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default CloudSolutions
