import { useEffect, useRef } from "react"
import gsap from "gsap"
import Header from "../components/Header"
import BlobImage from "../components/BlobImage"
import Footer from "../components/Footer"

const AboutUs = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-hero", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })

            gsap.from(".about-section", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <Header />
            <section ref={containerRef} className="bg-white min-h-screen ">

                {/* HERO */}
                {/* HERO */}
                <div
                    className="relative h-[320px] flex items-center justify-center bg-center bg-cover w-full"
                    style={{
                        backgroundImage:
                            "url('https://artiflexit.com/wp-content/uploads/2025/03/orizonjpg-024.jpg')",
                    }}
                >
                    {/* Blue overlay */}
                    <div className="absolute inset-0 bg-blue-900/70" />

                    {/* Content */}
                    <h1 className="relative text-white text-5xl font-bold">
                        About Us
                    </h1>
                </div>

                {/* MAIN CONTENT */}
                <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

                    {/*  CONTENT */}
                    <div className="about-section grid lg:grid-cols-3 gap-16 items-center">


                        {/* VALUES & VISIOn */}
                        <div className="space-y-10">


                            <div>
                                <p className="text-blue-600 font-semibold mb-2">
                                    Our Core Values
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Quality Program",
                                        "Innovation",
                                        "Client Success",
                                        "Teamwork",
                                    ].map((value) => (
                                        <li
                                            key={value}
                                            className="flex items-center gap-4 text-lg text-black font-medium"
                                        >
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                                                ✓
                                            </span>
                                            {value}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            {/* VISION */}
                            <div className="pt-6 border-t">
                                <p className="text-blue-600 font-semibold mb-2">
                                    Our Vision
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    To be the leading provider of custom software solutions,
                                    empowering businesses worldwide with cutting-edge technology
                                    to achieve their strategic goals.
                                </p>
                            </div>

                        </div>


                        {/* IMAGE + TEXT CARD */}
                        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">
                            <div className="flex justify-center ">
                                <BlobImage />
                            </div>


                            <div>
                                <p className="text-blue-600 font-semibold mb-2">
                                    Smart IT Solutions
                                </p>

                                <h3 className="text-3xl font-bold text-black mb-4">
                                    Driving Business Growth Through Technology
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We pride ourselves on delivering high-quality, innovative IT
                                    solutions that drive business growth and success.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    Customer satisfaction is our top priority. We take pride in
                                    seeing our clients succeed and being happy with the software
                                    solutions we provide.
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
            <Footer/>
        </>
    )
}

export default AboutUs

