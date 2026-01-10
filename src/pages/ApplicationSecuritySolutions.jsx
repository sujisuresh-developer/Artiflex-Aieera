import Header from "../components/Header"
import Benefits3D from "../components/Benefits3D"
import CloudBackground from "../components/CloudBackground"

const ApplicationSecuritySolutions = () => {
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
                Application Security Solutions
              </h1>
              <p className="text-gray-600 text-lg">
                Keep your applications secure, resilient, and compliant—no
                matter how complex your environment.
              </p>
            </div>

            {/* IMAGE (FROM HOME PAGE) */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://www.csoonline.com/wp-content/uploads/2023/06/cso_nw_application_security_data_protection_lock_code_by_thinkstock_491619538_1200x800-100817353-orig.jpg?quality=50&strip=all"
                alt="Application Security"
                className="w-[280px] md:w-[360px] rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Secure Every Line of Code. Protect Every Business Process.
            </h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed">
              In today’s digital-first landscape, business applications are
              critical assets that power operations, productivity, and
              innovation. However, this importance also makes them prime
              targets for cyber threats. Our Application Security Solutions
              integrate security at every stage of the application lifecycle
              to proactively identify vulnerabilities, reduce risk, and ensure
              compliance.
            </p>
          </div>

          {/* BUSINESS BENEFITS */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Business Benefits
            </h3>

            <Benefits3D
              items={[
                "Early detection of application vulnerabilities",
                "Secure development and deployment pipelines",
                "Improved compliance with security standards",
                "Reduced risk of data breaches and application downtime",
              ]}
            />
          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-blue-700 font-medium text-lg">
              Order a free consultation – our experts will select the most
              effective Application Security solution for your business
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Questions & Answers
            </h3>

            <p className="text-gray-600 mb-4 max-w-4xl">
              Applications are critical assets but also prime targets for cyber
              threats. Our Application Security Solutions protect your software
              from vulnerabilities. Explore our Q&A to understand how we secure
              applications, integrate security into development, and enhance
              compliance.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">
                  How do you secure applications throughout development?
                </h4>
                <p className="text-gray-600">
                  We embed security into the development lifecycle using secure
                  coding practices, vulnerability testing, and continuous
                  monitoring to identify and address risks early.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Can Application Security improve compliance?
                </h4>
                <p className="text-gray-600">
                  Yes, our solutions help organizations meet industry and
                  regulatory compliance requirements by enforcing secure
                  development standards and regular security assessments.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ApplicationSecuritySolutions
