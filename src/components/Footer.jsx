import { Link } from "react-router-dom"
import logo from "/logo.png"

const Footer = () => {
    return (
        <footer className="bg-white border-50px relative overflow-hidden">

            {/* INLINE ANIMATION (NO EXTRA CSS FILE) */}
            <style>{`
        @keyframes logoShake {
          0%   { transform: translateY(0) rotate(0deg); }
          20%  { transform: translateY(-2px) rotate(-1deg); }
          40%  { transform: translateY(1px) rotate(1deg); }
          60%  { transform: translateY(-1px) rotate(-0.5deg); }
          80%  { transform: translateY(1px) rotate(0.5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* TOP */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* BIG LOGO WITH SHAKE */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Artiflex IT"
                            className="h-16 md:h-20"
                            style={{
                                animation: "logoShake 3.5s ease-in-out infinite",
                            }}
                        />
                    </Link>

                    {/* NAV LINKS */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
                        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
                        <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
                        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                    </nav>
                </div>

               
                

                {/* BOTTOM */}
                <div className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-medium text-gray-700">Artiflex IT</span>.
                    All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
