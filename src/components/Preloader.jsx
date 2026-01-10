import logo from "../assets/logo.png"

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-white">

            {/* INLINE KEYFRAMES (NO EXTRA CSS FILE) */}
            <style>{`
        @keyframes glowPulse {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(255,255,255,0.4));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 40px rgba(255,255,255,0.9));
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(255,255,255,0.4));
          }
        }
      `}</style>

            {/* LOGO */}
            <img
                src={logo}
                alt="Artiflex IT"
                className="h-24 md:h-32"
                style={{
                    animation: "glowPulse 4s ease-in-out infinite",
                }}
            />
        </div>
    )
}

export default Preloader
