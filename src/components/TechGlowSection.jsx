const TechGlowSection = ({ children }) => {
  return (
    <section className="relative overflow-hidden mt-10">

      {/* TECH GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[#0A2A5A]">

        {/* TECH GRID (SUBTLE) */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(56,189,248,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.35) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* SOFT RADIAL GLOW (LOGO ACCENT) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(56,189,248,0.45),transparent_65%)]" />

        {/* MOVING HORIZONTAL GLOW LINE */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
              absolute top-0 left-[-100%] 
              w-[200%] h-full
              bg-gradient-to-r 
              from-transparent 
              via-[#38BDF8]/40 
              to-transparent
              animate-glowMove
            "
          />
        </div>

        {/* SUBTLE DARK GRADIENT DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A2A5A]/60 to-[#0A2A5A]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

export default TechGlowSection
