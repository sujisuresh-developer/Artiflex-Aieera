const logos = [
  "/dub.png",
  "/28.png",
  "/idAIdoQlaN_1766401349277.png",
  "/idIu5Lf4Sf_1766399953051.png",
  "/nbtc.png",
  "/idMNWTiY7c_logos.png",
  "/shaw.jpeg",
  "/LnW7oU12lP7gNmfZJtUdl05IXcB1736410981931_200x200.png",
]

const LogoAutoScroll = () => {
  return (
    <section className="bg-[#fdfdfd] py-20 overflow-hidden -mt-[20px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-20">
          Our Clients
        </h2>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">
          <div className="flex justify-evenly  animate-logo-scroll w-full">


            {/* duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center  justify-center min-w-[160px]"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-12 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* INLINE KEYFRAMES */}
      <style>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-logo-scroll {
          animation: logoScroll 35s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default LogoAutoScroll
