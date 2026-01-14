const AlternateSection = ({
  children,
  index,
}) => {
  const isBlue = index % 2 === 0

  return (
    <section
      className={`
        w-full
        ${isBlue ? "bg-gradient-to-br from-blue-10 via-blue-100 to-white" : "bg-[#fdfdfd]"}
        py-28
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

export default AlternateSection
