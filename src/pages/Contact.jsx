import Footer from "../components/Footer"
import Header from "../components/Header"
import React from "react"

const Contact = () => {
  return (
    <>
      <Header />

      {/* HERO WITH CURVED BOTTOM */}
      <section
        className="relative h-[380px] bg-cover bg-center mt-[111px] rounded-b-[80px] "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70 rounded-b-[80px]" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-blue-100 max-w-2xl">
            Artiflex IT is ready to provide the right solution according to your needs
          </p>
        </div>
      </section>

      {/* FLOATING CONTACT CARD */}
      <section className="-mt-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6 ">

          <div className="bg-white rounded-3xl shadow-2xl p-10 grid lg:grid-cols-2 gap-14 ">

            {/* LEFT INFO */}
            <div className="space-y-8 bg-blue-50">
              <h3 className="text-2xl font-bold">Get in touch</h3>

              <p className="text-gray-600">
                Reach out to us for expert IT solutions, consultations, or
                partnerships. We’re here to support your growth.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-gray-600">
                      Artiflex IT Solutions, Dubai
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">hello@aieera.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">+971 54 545 8167</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Send us a message
              </h3>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="input" placeholder="Name" />
                  <input className="input" placeholder="Company" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="input" placeholder="Phone" />
                  <input className="input" placeholder="Email" />
                </div>

                <select className="input">
                  <option>Select Service</option>
                  <option>Infrastructure Solutions</option>
                  <option>Cyber Security</option>
                  <option>Application Security</option>
                  <option>Cloud Solutions</option>
                  <option>Managed Services</option>
                  <option>AMC Services</option>
                </select>

                <textarea className="input h-28" placeholder="Message" />

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Send
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mt-10 my-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008235.2584495674!2d54.98082236296497!3d25.151013473462484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1768275535395!5m2!1sen!2sin"
              className="w-full h-[420px] border-0"
              loading="lazy"
              title="Map"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
