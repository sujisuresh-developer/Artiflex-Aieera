const ServicePageWrapper = ({ children }) => {
  return (
    <>
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6f9ff] via-[#ffffff] to-[#eef3ff]" />

      {/* SUBTLE GRID / TECH TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4970de 3px, transparent 2px), linear-gradient(to bottom, #073ccd 2px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </section>
    </>
  )
}

export default ServicePageWrapper
