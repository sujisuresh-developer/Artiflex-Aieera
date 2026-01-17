import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import { motion } from "framer-motion"

import ab1 from "../assets/about1.jpeg"
import ab2 from "../assets/about2.jpeg"
import ab3 from "../assets/about3.jpeg"
import ab4 from "../assets/about4.jpeg"

import infra1 from "../assets/infra1.jpg"
import cyber1 from "../assets/cyber1.jpg"
import cloud1 from "../assets/cloud1.jpg"
import consult from "../assets/consult.jpg"
import customer from "../assets/customer.jpg"

/* ================= DATA ================= */

const stackedImages = [ab1, ab2, ab3, ab4]

/* ================= ANIMATIONS ================= */

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

/* ================= COMPONENT ================= */

const AboutUs = () => {
  const [stackOpen, setStackOpen] = useState(false)

  return (
    <>
      <Header />

      <section className="relative bg-[#fdfdfd] min-h-screen overflow-hidden">

        {/* 🔹 ANIMATED GRADIENT BACKGROUND (UNCHANGED) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25),transparent_60%)] animate-gradientMoveSlow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,64,175,0.25),transparent_65%)] animate-gradientMoveReverse" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-blue-200/40" />
        </div>

        {/* 🔹 HERO (UNCHANGED) */}
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

          {/* INTRO (UNCHANGED) */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              We make sure your IT works for you
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Artiflex, we are committed to delivering high quality, innovative
              IT solutions that fuel business growth and long-term success. With
              over 15 years of industry experience, we have established
              ourselves as a trusted technology partner to organizations around
              the world.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We specialize in crafting custom software and IT solutions tailored
              to meet the unique needs of each client. Our focus on efficiency,
              scalability, and security ensures that your technology is not only
              robust today but ready for the future.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Backed by a team of 20+ certified full time professionals, we have
              successfully completed over 500 projects across various
              industries. Our global presence, with offices in four countries,
              allows us to support clients with agility and local insight.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We operate multiple branches across the region, including Manchi
              in Oman, Metal World in Saudi Arabia, and our Dubai branch, now
              operating as Artiflex Information Technology.
            </p>


          </div>

          {/* ================= VISION & MISSION ================= */}
          <div className="max-w-5xl mx-auto text-center space-y-12">

            {/* OUR VISION */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-900">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Empowering businesses with trust through cyber resilience.
              </p>
            </div>

            {/* OUR MISSION */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-900">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                To deliver customized, secure, and scalable IT solutions that empower
                industries from energy to fintech to operate efficiently and grow
                confidently.
              </p>
            </div>

          </div>

          {/* ================= CORE VALUES ================= */}
          <div className="max-w-6xl mx-auto mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
              Our Core Values
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* VALUE 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 bg-gradient-to-br from-blue-900 via-[#fdfdfd] to-blue-800">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">
                  Client Success
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We prioritize understanding our clients’ goals and delivering solutions
                  that ensure measurable success.
                </p>
              </div>

              {/* VALUE 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 bg-gradient-to-br from-blue-900 via-[#fdfdfd] to-blue-800">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">
                  Innovation
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We embrace the latest technologies and approaches to keep our solutions
                  forward-thinking and effective.
                </p>
              </div>

              {/* VALUE 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 bg-gradient-to-br from-blue-900 via-[#fdfdfd] to-blue-800">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">
                  Quality Program
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every project we undertake is driven by a strong commitment to quality
                  and continuous improvement.
                </p>
              </div>

              {/* VALUE 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 bg-gradient-to-br from-blue-900 via-[#fdfdfd] to-blue-800">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">
                  Teamwork
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Collaboration and mutual respect guide how we work with our clients and
                  within our teams.
                </p>
              </div>

            </div>
          </div>


          {/* ================= STACKED IMAGE SECTION (FIXED ONLY HERE) ================= */}
          <div
            className="relative group h-[320px] flex justify-center items-center cursor-pointer"
            onClick={() => setStackOpen(prev => !prev)}
          >

            {/* MOBILE → GRID (2 PER ROW) */}
            <div
              className={`
                grid grid-cols-2 gap-4 w-full max-w-md
                md:hidden transition-all duration-500
                ${stackOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute pointer-events-none"}
              `}
            >
              {stackedImages.map((img, index) => (
                <div
                  key={index}
                  className="w-full h-40 rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    src={img}
                    alt="About Artiflex IT"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* STACKED VIEW (DEFAULT + DESKTOP) */}
            <div
              className={`
                relative w-full h-full flex justify-center items-center
                ${stackOpen ? "hidden md:flex" : "flex"}
              `}
            >
              {stackedImages.map((img, index) => (
                <div
                  key={index}
                  className={`
                    absolute w-72 h-56 rounded-2xl overflow-hidden
                    border-4 border-white shadow-2xl
                    transition-all duration-700 ease-out

                    ${index === 0 && "-rotate-6 -translate-x-24 z-10"}
                    ${index === 1 && "-rotate-3 -translate-x-12 z-20"}
                    ${index === 2 && "rotate-2 translate-x-12 z-30"}
                    ${index === 3 && "rotate-5 translate-x-24 z-40"}

                    md:group-hover:rotate-0
                    md:group-hover:translate-x-0
                    md:group-hover:relative
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

          </div>
          {/* ================= END STACK ================= */}


          {/* SECTION 1 (UNCHANGED) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.img
              src={infra1}
              className="rounded-3xl shadow-xl"
              variants={imageLeft}
              initial="hidden"
              whileInView="visible"
            />
            <motion.div variants={textRight} initial="hidden" whileInView="visible">
              <h3 className="text-3xl font-bold mb-4">
                IT Infrastructure Management
              </h3>
              <p className="text-gray-600 -mt-5">
                Build a reliable IT foundation for smooth operations.
              </p>
              <p className="flex justify-items align-items mt-5">
                We design and implement secure, scalable IT
                infrastructure from network setup and server
                deployment to data center management
                providing a solid foundation for your digital
                operations
              </p>
            </motion.div>
          </div>

          {/* SECTION 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={textLeft} initial="hidden" whileInView="visible">
              <h3 className="text-3xl font-bold mb-4">
                Cybersecurity & Protection
              </h3>
              <p className="text-gray-600 -mt-5">
                Safeguard your business from modern threats.
              </p>
              <p className=" flex justify-items align-items mt-5">
                Comprehensive security services to
                protect your business from modern threats:
                Ethical hacking (penetration testing)
                Cloud, network, and web security
                Data privacy protection, SIEM, PAM, NDR, and DMARC setups
                Data leak prevention initiatives
                Security training for staff to build human resilience
                These services proactively identify vulnerabilities
                and help prevent unauthorized access while reducing
                long term maintenance costs.

              </p>
            </motion.div>
            <motion.img
              src={cyber1}
              className="rounded-3xl shadow-xl"
              variants={imageRight}
              initial="hidden"
              whileInView="visible"
            />
          </div>

          {/* SECTION 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.img
              src={cloud1}
              className="rounded-3xl shadow-xl"
              variants={imageLeft}
              initial="hidden"
              whileInView="visible"
            />
            <motion.div variants={textRight} initial="hidden" whileInView="visible">
              <h3 className="text-3xl font-bold mb-4">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 -mt-5">
                Next-Gen IT for the Modern Enterprise.
              </p>
              <p className=" flex justify-items align-items mt-5">
                End to end cloud transformation services
                including cloud migration, implementation,
                optimization, and ongoing management. These
                solutions are designed to boost operational
                efficiency, cost-effectiveness, and adaptability.

              </p>

            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={textLeft} initial="hidden" whileInView="visible">
              <h3 className="text-3xl font-bold mb-4">
                Consultancy Services
              </h3>
              <p className="text-gray-600 -mt-5">
                Transforming Challenges into Opportunities.
              </p>
              <p className=" flex justify-items align-items mt-5">
                Gain deep expertise and clarity through tailored
                consultancy offerings. Whether it's business technology
                strategy, architecture planning, or actionable roadmaps,
                Artiflex helps drive your organization forward with expert
                recommendations and perspectives
              </p>
            </motion.div>
            <motion.img
              src={consult}
              className="rounded-3xl shadow-xl"
              variants={imageRight}
              initial="hidden"
              whileInView="visible"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.img
              src={customer}
              className="rounded-3xl shadow-xl"
              variants={imageLeft}
              initial="hidden"
              whileInView="visible"
            />
            <motion.div variants={textRight} initial="hidden" whileInView="visible">
              <h3 className="text-3xl font-bold mb-4">
                Customer Support
              </h3>
              <p className="text-gray-600 -mt-5">
                Exceeding your expectations, consistently.
              </p>
              <p className=" flex justify-items align-items mt-5">
                End to end cloud transformation services
                including cloud migration, implementation,
                optimization, and ongoing management. These
                solutions are designed to boost operational
                efficiency, cost-effectiveness, and adaptability.

              </p>

            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutUs
