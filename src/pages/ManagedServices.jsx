import Header from "../components/Header"
import Benefits3D from "../components/Benefits3D"
import CloudBackground from "../components/CloudBackground"

const ManagedServices = () => {
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
                Managed Services
              </h1>
              <p className="text-gray-600 text-lg">
                Expert guidance tailored to drive transformation, growth, and
                competitive advantage.
              </p>
            </div>

            {/* IMAGE (FROM HOME PAGE SET) */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://cloudarmee.com/wp-content/uploads/2022/12/1.jpg"
                alt="Managed Services"
                className="w-[280px] md:w-[360px] rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Choose the best Managed Services
            </h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed">
              At Artiflex IT, our Managed Services empower businesses with
              expert guidance, tailored IT roadmaps, optimized technology
              investments, and regulatory compliance support. We help
              organizations navigate complex IT environments, drive smarter
              decisions, foster innovation, and achieve sustainable growth in
              an ever-evolving digital landscape.
            </p>
          </div>

          {/* BUSINESS BENEFITS */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Business Benefits
            </h3>

            <Benefits3D
              items={[
                "Proactive IT management and expert support",
                "Optimized technology investments and cost efficiency",
                "Improved operational performance and scalability",
                "Strategic guidance for long-term business growth",
              ]}
            />
          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-blue-700 font-medium text-lg">
              Order a free consultation – our experts will select the most
              effective Managed Services solution for your business
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Questions & Answers
            </h3>

            <p className="text-gray-600 mb-4 max-w-4xl">
              Expert guidance is essential for strategic growth. Our Managed
              Services help businesses overcome IT challenges, optimize
              technology investments, and achieve long-term success. Explore
              our Q&A to see how our experts support your business objectives.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">
                  How do Managed Services support business growth?
                </h4>
                <p className="text-gray-600">
                  By providing continuous IT oversight, strategic planning,
                  and expert support, Managed Services enable businesses to
                  focus on innovation while ensuring stable and scalable IT
                  operations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Can Managed Services help reduce IT costs?
                </h4>
                <p className="text-gray-600">
                  Yes, our Managed Services optimize technology investments,
                  reduce downtime, and improve efficiency—helping control
                  costs while maximizing value.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ManagedServices
