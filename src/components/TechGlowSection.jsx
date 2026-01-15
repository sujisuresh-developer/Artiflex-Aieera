const TechGlowSection = ({ children }) => {
  return (
    <section className="relative overflow-hidden mt-10">

      {/* LIGHT HERO-MATCHED BACKGROUND */}
      <div className="absolute inset-0">

        {/* BASE SOFT GRADIENT (MATCH HERO) */}
        <div className="absolute inset-0 bg-gradient-to-br 
          from-white 
          via-blue-50 
          to-blue-200 
        " />

        {/* FLOWING COLOR WASH */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(96,165,250,0.35), transparent 55%), radial-gradient(circle at 70% 70%, rgba(59,130,246,0.35), transparent 55%)",
          }}
        />

        {/* VERY SUBTLE GRID (OPTIONAL TECH FEEL) */}


        {/* SLOW MOVING LIGHT BAND */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
              absolute top-0 left-[-100%]
              w-[200%] h-full
              bg-gradient-to-r
              from-transparent
              via-blue-300/30
              to-transparent
              animate-glowMoveSlow
            "
          />
        </div>

        {/* SOFT DEPTH FADE */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-500" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

export default TechGlowSection
