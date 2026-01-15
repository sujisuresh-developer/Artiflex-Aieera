import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import { motion } from "framer-motion"




const faqData = [
  {
    title: "IT Infrastructure Optimization",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    desc: "Optimizing your IT infrastructure is key to ensuring seamless business operations.",
    faqs: [
      { q: "Why is infrastructure optimization important?", a: "It improves performance, enhances security, and minimizes downtime." },
      { q: "Can infrastructure scale with business growth?", a: "Yes, our solutions are designed to grow with your business." }
    ]
  },
  {
    title: "Cyber Security Solutions",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    desc: "Cyber threats are constantly evolving—your defense strategy should too.",
    faqs: [
      { q: "How do Cyber Security Solutions protect my business?", a: "By identifying vulnerabilities, monitoring threats in real time, and implementing proactive controls." },
      { q: "Do you provide compliance and audit support?", a: "Yes, we support compliance through structured security frameworks." }
    ]
  },
  {
    title: "Application Security",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    desc: "Applications are critical assets but also prime targets for cyber threats.",
    faqs: [
      { q: "How do you secure applications throughout development?", a: "We embed security into the development lifecycle using secure coding, testing, and monitoring." },
      { q: "Can Application Security improve compliance?", a: "Yes, through secure development standards and assessments." }
    ]
  },
  {
    title: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    desc: "The cloud is the future—make the most of it with secure and scalable solutions.",
    faqs: [
      { q: "Do you support cloud migration?", a: "Yes, with complete migration and optimization services." },
      { q: "How does cloud improve scalability?", a: "Resources scale on demand with better cost control." }
    ]
  },
  {
    title: "Managed Services",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    desc: "Expert guidance is essential for strategic growth and IT stability.",
    faqs: [
      { q: "How do Managed Services help growth?", a: "Through continuous IT oversight, planning, and expert support." },
      { q: "Can Managed Services reduce costs?", a: "Yes, by improving efficiency and reducing downtime." }
    ]
  },
  {
    title: "AMC Services",
    image: "https://plus.unsplash.com/premium_photo-1683134444181-c3c5714dd876",
    desc: "Comprehensive IT support and maintenance to ensure business continuity.",
    faqs: [
      { q: "What does AMC include?", a: "Monitoring, maintenance, updates, and disaster recovery." },
      { q: "How does AMC improve continuity?", a: "By preventing failures and ensuring rapid response." }
    ]
  }
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <h1 className="relative text-white text-5xl font-bold text-center mt-10">
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-blue-400 via-[#fdfdfd] to-blue-500">

        {/* EMOJI BACKGROUND */}
        

        {/* WHITE SOFT OVERLAY */}
        <div className="absolute inset-0  backdrop-blur-[1px]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-28">

          {faqData.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.9 }}
              className="grid lg:grid-cols-2 gap-14 items-start"
            >

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[320px] object-cover"
                />
              </motion.div>

              {/* TEXT */}
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {section.desc}
                </p>

                {/* ACCORDION */}
                <div className="space-y-4">
                  {section.faqs.map((item, idx) => {
                    const key = `${i}-${idx}`
                    return (
                      <motion.div
                        key={key}
                        layout
                        className="border rounded-xl overflow-hidden bg-white shadow-sm"
                      >
                        <button
                          onClick={() => setOpen(open === key ? null : key)}
                          className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left hover:bg-blue-50 transition"
                        >
                          {item.q}
                          <span className="text-blue-600 text-xl">
                            {open === key ? "−" : "+"}
                          </span>
                        </button>

                        {open === key && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 py-4 text-gray-600 bg-blue-50"
                          >
                            {item.a}
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  )
}

export default FAQ
