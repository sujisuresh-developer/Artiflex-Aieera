import Header from "../components/Header"
import Benefits3D from "../components/Benefits3D"
import CloudBackground from "../components/CloudBackground"

const CyberSecuritySolutions = () => {
    return (
        <>
            <Header />

            <section className="relative bg-white min-h-screen overflow-hidden pt-[5px] ">
                <CloudBackground />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-20">

                    {/* TITLE */}
                    <div className="grid md:grid-cols-2 gap-10 items-center ">
                        <div>
                            <h1 className="text-5xl font-bold text-black mb-4">
                                Cyber Security Solutions
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Fortify Your Business with Enterprise-Grade Cyber Security
                            </p>
                        </div>

                        {/* IMAGE (same style as Infrastructure page) */}
                        <div className="flex justify-center md:justify-end">
                            <img
                                src="https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/81e0b761-d0e6-461b-8f3d-0d18d566275b/image.png?ut=1614279411709"
                                alt="Cyber Security"
                                className="w-[280px] md:w-[360px] rounded-xl shadow-xl"
                            />
                        </div>
                    </div>

                    {/* INTRO */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Choose the best Cyber Security Solutions
                        </h2>
                        <p className="text-gray-600 max-w-4xl leading-relaxed">
                            Our Cyber Security Solutions are designed to protect your
                            organization from evolving cyber threats. We begin by conducting
                            a comprehensive security assessment to identify vulnerabilities,
                            analyze risks, and implement advanced protection strategies to
                            safeguard your systems, networks, and data.
                        </p>
                    </div>

                    {/* BUSINESS BENEFITS */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            Business Benefits
                        </h3>

                        <Benefits3D
                            items={[
                                "Advanced threat detection & prevention",
                                "Protection against data breaches",
                                "Regulatory compliance & risk management",
                                "Continuous monitoring & rapid response",
                            ]}
                        />
                    </div>

                    {/* CTA */}
                    <div className="bg-blue-50 rounded-xl p-8">
                        <p className="text-blue-700 font-medium text-lg">
                            Order a free consultation – our experts will select the most
                            effective Cyber Security solution for your business
                        </p>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            Questions & Answers
                        </h3>

                        <p className="text-gray-600 mb-4 max-w-4xl">
                            Cyber threats are constantly evolving—your defense strategy
                            should too. Our Cyber Security Solutions help organizations
                            strengthen their security posture, protect sensitive data,
                            and maintain compliance with industry standards.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold">
                                    How do Cyber Security Solutions protect my business?
                                </h4>
                                <p className="text-gray-600">
                                    By identifying vulnerabilities, monitoring threats in
                                    real time, and implementing proactive security controls
                                    that reduce risk and prevent attacks.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Do you provide compliance and audit support?
                                </h4>
                                <p className="text-gray-600">
                                    Yes, we help organizations meet regulatory and compliance
                                    requirements through structured security frameworks and
                                    continuous assessments.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CyberSecuritySolutions
