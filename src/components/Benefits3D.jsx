import { useState } from "react"

const benefits = [
    "Improved network performance",
    "Enhanced security & compliance",
    "Reduced downtime",
    "Scalable infrastructure growth",
]

const Benefits3D = () => {
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div className="w-full overflow-hidden">
            {/* Perspective wrapper */}
            <div className="mx-auto perspective-[1200px]">
                {/* Rail */}
                <div
                    className="
            flex items-center justify-center
            gap-6
            flex-nowrap
            touch-pan-x
          "
                >
                    {benefits.map((item, index) => {
                        const offset = index - activeIndex

                        return (
                            <div
                                key={item}
                                className="
                  shrink-0
                  transition-transform
                  duration-500
                  ease-out
                  cursor-pointer
                "
                                style={{
                                    transform: `
                    translateX(${offset * (window.innerWidth < 50 ? 100 : 25)}px)
                    translateZ(${offset === 0 ? 120 : -70}px)
                    rotateY(${offset * -12}deg)
                    scale(${offset === 0 ? 1.06 : 0.92})
                  `,
                                    willChange: "transform",
                                }}
                                onClick={() => setActiveIndex(index)}     // mobile
                                onMouseEnter={() => setActiveIndex(index)} // desktop
                            >
                                <div
                                    className="
                    w-[220px]
                    sm:w-[260px]
                    bg-white/85
                    backdrop-blur
                    rounded-xl
                    p-6
                    shadow-xl
                    text-center
                  "
                                >
                                    <p className="font-semibold text-gray-800">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Benefits3D
