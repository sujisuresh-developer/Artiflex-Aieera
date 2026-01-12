import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "/logo.png"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Artiflex IT" className="h-10" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-black font-medium">

          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>

          {/* SERVICES DROPDOWN (FIXED) */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Services
              <span className="text-xs">▼</span>
            </button>

            {/* DROPDOWN */}
            <div
              className="absolute top-9 left-0 w-72 rounded-xl
              bg-gradient-to-br from-blue-50 via-white to-blue-100
              backdrop-blur-xl shadow-2xl border border-blue-100 py-2
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200"
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
                  className="block px-5 py-3 text-sm rounded-md
                  text-gray-700 hover:text-blue-700
                  hover:bg-blue-100 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-white to-blue-50 border-t shadow-xl">

          <div className="px-6 py-6 space-y-4 text-black font-medium">

            <Link to="/" onClick={() => setMobileOpen(false)} className="block hover:text-blue-600">
              Home
            </Link>

            <Link to="/about" onClick={() => setMobileOpen(false)} className="block hover:text-blue-600">
              About
            </Link>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full hover:text-blue-600"
              >
                <span>Services</span>
                <span className="text-xl font-bold">
                  {servicesOpen ? "−" : "+"}
                </span>
              </button>

              {servicesOpen && (
                <div className="mt-3 ml-4 space-y-2 text-sm">
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
                      onClick={() => {
                        setMobileOpen(false)
                        setServicesOpen(false)
                      }}
                      className="block text-gray-600 hover:text-blue-600 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
