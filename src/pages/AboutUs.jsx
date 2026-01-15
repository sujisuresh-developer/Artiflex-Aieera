import Header from "../components/Header"
import Footer from "../components/Footer"
import { motion } from "framer-motion"


const stackedImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  "https://images.unsplash.com/photo-1531498860502-7c67cf02f657",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
]




const imageLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
}

const imageRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
}

const textLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.15 },
  },
}

const textRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.15 },
  },
}



const AboutUs = () => {
  return (
    <>
      <Header />

      <section className="relative bg-[#fdfdfd] min-h-screen  overflow-hidden">



        {/* ANIMATED GRADIENT BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* BASE GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200" />

          {/* MOVING DARK BLUE FLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25),transparent_60%)] animate-gradientMoveSlow" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,64,175,0.25),transparent_65%)] animate-gradientMoveReverse" />

          {/* DEPTH OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-blue-200/40" />
        </div>



        {/* 🔹 HERO */}
        <div
          className="relative z-10 h-[360px] flex items-center justify-center bg-center bg-cover w-full"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/64db80a5e88c6b1723ff760b/652800c61d16d3b50d4aed7c_Our%20mission%20-%20inside%20page%20(1).webp')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70" />
          <h1 className="relative text-white text-5xl font-bold">
            About Us
          </h1>
        </div>

        {/* 🔹 CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-32">

          {/* INTRO */}
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

          {/* IMAGE STRIP */}
          {/* STACKED IMAGE CARDS */}
          <div className="relative group h-[320px] flex justify-center items-center">

            {stackedImages.map((img, index) => (
              <div
                key={index}
                className={`
        absolute w-72 h-56 rounded-2xl overflow-hidden
        border-4 border-white shadow-2xl
        transition-all duration-950 ease-out

        /* INITIAL STACK */
        ${index === 0 && "-rotate-6 -translate-x-24 z-10"}
        ${index === 1 && "-rotate-3 -translate-x-12 z-20"}
        ${index === 2 && "rotate-2 translate-x-12 z-30"}
        ${index === 3 && "rotate-5 translate-x-24 z-40"}

        /* HOVER → ALIGN IN ROW */
        group-hover:rotate-0
        group-hover:translate-x-0
        group-hover:relative
      `}
              >
                <img
                  src={img}
                  alt="About Artiflex IT"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>


          {/* SECTION 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051"
              alt="IT Infrastructure"
              className="rounded-3xl shadow-xl"
              variants={imageLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            />

            {/* TEXT */}
            <motion.div
              variants={textRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
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
            </motion.div>

          </div>


          {/* SECTION 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <motion.div
              variants={textLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-4">
                Cybersecurity & Protection
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                From system setup to ongoing maintenance, we ensure everything
                runs efficiently so your team can stay focused on what matters
              </p>

              <p className="text-gray-600 leading-relaxed">
                Keep your business secure from modern threats.
                Safeguard your data, devices, and network with advanced
                endpoint protection, firewalls, and security monitoring.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7"
              alt="Cybersecurity"
              className="rounded-3xl shadow-xl"
              variants={imageRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            />

          </div>


          {/* SECTION 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1677529498680-fdb9d5ee762a"
              alt="Cloud Solutions"
              className="rounded-3xl shadow-xl"
              variants={imageLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            />

            {/* TEXT */}
            <motion.div
              variants={textRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
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
            </motion.div>

          </div>


          {/* FEATURE STRIP */}
          <div className="bg-blue-50 rounded-3xl p-14 shadow-inner bg-gradient-to-br from-blue-500 via-white to-blue-500">
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
