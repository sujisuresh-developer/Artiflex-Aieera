const DarkVeil = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* BLUE / PURPLE SILK GRADIENT */}
          <linearGradient id="silkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2ff" />
            <stop offset="40%" stopColor="#93c5fd" />
            <stop offset="70%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          {/* SOFT LIGHT SHADOW */}
          <filter id="silkBlur">
            <feGaussianBlur stdDeviation="35" />
          </filter>
        </defs>

        {/* WAVE LAYER 1 */}
        <path fill="url(#silkGradient)" filter="url(#silkBlur)">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,300 C240,260 480,360 720,340 960,320 1200,260 1440,300 L1440,900 L0,900 Z;
              M0,320 C240,360 480,260 720,300 960,340 1200,360 1440,320 L1440,900 L0,900 Z;
              M0,300 C240,260 480,360 720,340 960,320 1200,260 1440,300 L1440,900 L0,900 Z
            "
          />
        </path>

        {/* WAVE LAYER 2 (SILK SHINE) */}
        <path fill="#ffffff" opacity="0.15">
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,250 C300,200 600,300 900,260 1200,220 1440,240 1440,240 L1440,0 L0,0 Z;
              M0,260 C300,300 600,220 900,260 1200,300 1440,260 1440,260 L1440,0 L0,0 Z;
              M0,250 C300,200 600,300 900,260 1200,220 1440,240 1440,240 L1440,0 L0,0 Z
            "
          />
        </path>
      </svg>
    </div>
  )
}

export default DarkVeil
