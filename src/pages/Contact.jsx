import Footer from "../components/Footer"
import Header from "../components/Header"
import React from "react"

const Contact = () => {
  return (
    <>
      <Header />

      <section
        className="relative min-h-screen pt-[60px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-[#fdfdfd]/70 to-blue-200/80" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          {/* TITLE */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-black mb-6">
              Let’s Build Something Great Together
            </h1>
            <p className="text-gray-700 text-lg">
              Have a question, idea, or project in mind? Our experts are ready
              to help you transform your vision into reality.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT – CONTACT INFO */}
            <div className="space-y-10">

              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                alt="Support Team"
                className="rounded-2xl shadow-xl w-full object-cover h-64"
              />

              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-700 max-w-md">
                  Reach out to us for expert IT solutions, consultations, or
                  partnerships. We’re here to support your growth.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Office</h4>
                    <p className="text-gray-700">
                      Artiflex IT Solutions, Dubai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Phone</h4>
                    <p className="text-gray-700">+971 54 545 8167</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <p className="text-gray-700">hello@aieera.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – FORM */}
            <div className="bg-white rounded-2xl shadow-2xl p-10">
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

                {/* ✅ CHOOSE SERVICE */}
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 text-gray-700"
                >
                  <option value="">Select a Service</option>
                  <option>Infrastructure Solutions</option>
                  <option>Cyber Security</option>
                  <option>Application Security</option>
                  <option>Cloud Solutions</option>
                  <option>Managed Services</option>
                  <option>AMC Services</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message →
                </button>
              </form>
            </div>

          </div>

         {/* MAP SECTION */}
<div className="mt-24 rounded-3xl overflow-hidden shadow-2xl bg-white">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008235.2584495674!2d54.98082236296497!3d25.151013473462484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1768275535395!5m2!1sen!2sin"
    className="w-full h-[420px] border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Artiflex IT Location"
  />
</div>


        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
