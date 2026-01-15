import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "/logo.png"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-4 left-0 w-full z-50">

      {/* FLOATING NAVBAR */}
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
            bg-gradient-to-r from-blue-300 via-[#fdfdfd] to-blue-200
            backdrop-blur-xl
            rounded-full
            shadow-xl
            border border-blue-100
          "
        >
          <div className="flex items-center justify-between px-2 py-1">

            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Artiflex IT"
                className="h-16 w-30 md:h-18"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-gray-800 font-medium">

              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>

              <Link to="/about" className="hover:text-blue-600 transition">
                About
              </Link>

              {/* SERVICES DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                  Services
                  <span className="text-xs">▼</span>
                </button>

                <div
                  className="
                    absolute top-10 left-0 w-72
                    rounded-xl
                    bg-gradient-to-br from-blue-50 via-white to-blue-100
                    shadow-2xl
                    border border-blue-100
                    py-2
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all
                  "
                >
                  {[
                    { name: "Infrastructure Solutions", path: "/infrastructure-solutions" },
                    { name: "Cyber Security", path: "/cyber-security-solutions" },
                    { name: "Application Security", path: "/application-security-solutions" },
                    { name: "Cloud Solutions", path: "/cloud-solutions" },
                    { name: "Managed Services", path: "/managed-services" },
                    { name: "AMC Services", path: "/amc-services" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="
                        block px-5 py-3 text-sm rounded-md
                        text-gray-700 hover:text-blue-700
                        hover:bg-blue-100 transition
                      "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/faq" className="hover:text-blue-600 transition">
                FAQ
              </Link>

              {/* CONTACT BUTTON */}
              <Link
                to="/contact"
                className="
                  ml-4 px-6 py-2 rounded-full
                  bg-gradient-to-r from-blue-500 to-cyan-500
                  text-white font-semibold
                  shadow-lg hover:opacity-90 transition
                "
              >
                Contact
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden mt-4 px-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between w-full"
            >
              Services
              <span>{servicesOpen ? "−" : "+"}</span>
            </button>

            {servicesOpen && (
              <div className="pl-4 space-y-2 text-sm">
                <Link to="/infrastructure-solutions">Infrastructure</Link>
                <Link to="/cyber-security-solutions">Cyber Security</Link>
                <Link to="/application-security-solutions">Application Security</Link>
                <Link to="/cloud-solutions">Cloud</Link>
                <Link to="/managed-services">Managed Services</Link>
                <Link to="/amc-services">AMC</Link>
              </div>
            )}

            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
