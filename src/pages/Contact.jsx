import Footer from "../components/Footer"
import Header from "../components/Header"
import React from "react"

const Contact = () => {
  return (
    <>

      <Header />
     
    

      <section className="relative bg-gradient-to-br from-blue-200 via-white to-blue-300 min-h-screen pt-[40px]">
        <div className="max-w-7xl mx-auto px-6 py-24">

          {/* TITLE */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-black mb-6">
              Let’s Build Something Great Together
            </h1>
            <p className="text-gray-600 text-lg">
              Have a question, idea, or project in mind? Our experts are ready
              to help you transform your vision into reality.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT – CONTACT INFO */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 max-w-md">
                  Reach out to us for expert IT solutions, consultations, or
                  partnerships. We’re here to support your growth.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Office</h4>
                    <p className="text-gray-600">
                      Artiflex IT Solutions, Dubai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Phone</h4>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <p className="text-gray-600">info@artiflexit.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – FORM */}
            <div className="bg-white rounded-2xl shadow-xl p-10 ">
              <h3 className="text-2xl font-bold mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Company (Optional)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                />

                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message →
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
