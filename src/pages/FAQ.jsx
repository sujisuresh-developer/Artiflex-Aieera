import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"

const faqData = [
  {
    title: "IT Infrastructure Optimization",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    desc:
      "Optimizing your IT infrastructure is key to ensuring seamless business operations.",
    faqs: [
      {
        q: "Why is infrastructure optimization important?",
        a: "It improves performance, enhances security, and minimizes downtime."
      },
      {
        q: "Can infrastructure scale with business growth?",
        a: "Yes, our solutions are designed to grow with your business."
      }
    ]
  },
  {
    title: "Cyber Security Solutions",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    desc:
      "Cyber threats are constantly evolving—your defense strategy should too.",
    faqs: [
      {
        q: "How do Cyber Security Solutions protect my business?",
        a:
          "By identifying vulnerabilities, monitoring threats in real time, and implementing proactive security controls."
      },
      {
        q: "Do you provide compliance and audit support?",
        a:
          "Yes, we help organizations meet regulatory and compliance requirements through structured security frameworks."
      }
    ]
  },
  {
    title: "Application Security",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    desc:
      "Applications are critical assets but also prime targets for cyber threats.",
    faqs: [
      {
        q: "How do you secure applications throughout development?",
        a:
          "We embed security into the development lifecycle using secure coding, testing, and continuous monitoring."
      },
      {
        q: "Can Application Security improve compliance?",
        a:
          "Yes, it helps meet regulatory requirements through secure development standards."
      }
    ]
  },
  {
    title: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    desc:
      "The cloud is the future—make the most of it with secure and scalable solutions.",
    faqs: [
      {
        q: "Do you support cloud migration and optimization?",
        a:
          "Yes, we provide complete cloud migration services along with performance optimization."
      },
      {
        q: "How do Cloud Solutions improve scalability?",
        a:
          "Cloud infrastructure allows resources to scale on demand, enabling flexibility and cost control."
      }
    ]
  },
  {
    title: "Managed Services",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    desc:
      "Expert guidance is essential for strategic growth and IT stability.",
    faqs: [
      {
        q: "How do Managed Services support business growth?",
        a:
          "They provide continuous IT oversight, strategic planning, and expert support."
      },
      {
        q: "Can Managed Services help reduce IT costs?",
        a:
          "Yes, by optimizing investments, reducing downtime, and improving efficiency."
      }
    ]
  },
  {
    title: "AMC Services",
    image: "https://plus.unsplash.com/premium_photo-1683134444181-c3c5714dd876?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    desc:
      "Comprehensive IT support and maintenance to ensure business continuity.",
    faqs: [
      {
        q: "What does AMC Services include?",
        a:
          "Proactive monitoring, regular maintenance, security updates, issue resolution, and disaster recovery."
      },
      {
        q: "How do AMC Services improve business continuity?",
        a:
          "By preventing failures, minimizing downtime, and ensuring rapid response."
      }
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
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center mt-26"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <h1 className="relative text-white text-5xl font-bold flex items-center justify-center">
            Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ CONTENT */}
      <section className="bg-[#fdfdfd] py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {faqData.map((section, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-14 items-start">

              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[320px] object-cover"
                />
              </div>

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
                      <div
                        key={key}
                        className="border rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpen(open === key ? null : key)
                          }
                          className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left bg-[#fdfdfd] hover:bg-blue-50 transition"
                        >
                          {item.q}
                          <span className="text-blue-600 text-xl">
                            {open === key ? "−" : "+"}
                          </span>
                        </button>

                        {open === key && (
                          <div className="px-6 py-4 text-gray-600 bg-blue-50">
                            {item.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  )
}

export default FAQ
