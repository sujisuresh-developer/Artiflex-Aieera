import { Link } from "react-router-dom"
import logo from "/logo.png"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0A2A5A]/30 via-[#1E40AF] to-[#38BDF8]">

      {/* INLINE LOGO SHAKE ANIMATION */}
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

      <div className="w-full px-6 md:px-12 lg:px-20 py-20">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-white">

          {/* LOGO + TAGLINE */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/">
              <img
                src={logo}
                alt="Artiflex IT"
                className="h-20 mb-4 drop-shadow-xl "
                style={{ animation: "logoShake 3.5s ease-in-out infinite" }}
              />
            </Link>
            <p className="text-sm text-blue-100 max-w-xs">
              Secure, scalable & reliable IT solutions helping businesses
              transform infrastructure into uptime.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="font-semibold text-lg mb-2 text-white">
              Quick Links
            </h4>

            <Link to="/" className="text-blue-100 hover:text-white transition">
              Home
            </Link>
            <Link to="/about" className="text-blue-100 hover:text-white transition">
              About
            </Link>
            <Link to="/contact" className="text-blue-100 hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="font-semibold text-lg mb-2 text-white">
              Services
            </h4>

            <Link to="/infrastructure-solutions" className="text-blue-100 hover:text-white transition">
              Infrastructure Solutions
            </Link>
            <Link to="/cyber-security-solutions" className="text-blue-100 hover:text-white transition">
              Cyber Security
            </Link>
            <Link to="/application-security-solutions" className="text-blue-100 hover:text-white transition">
              Application Security
            </Link>
            <Link to="/cloud-solutions" className="text-blue-100 hover:text-white transition">
              Cloud Solutions
            </Link>
            <Link to="/managed-services" className="text-blue-100 hover:text-white transition">
              Managed Services
            </Link>
            <Link to="/amc-services" className="text-blue-100 hover:text-white transition">
              AMC Services
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/25" />

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-blue-100">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-white">Artiflex IT</span>.
          All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
