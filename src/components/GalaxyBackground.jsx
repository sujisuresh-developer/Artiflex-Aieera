import Galaxy from "./Galaxy"

const GalaxyBackground = () => {
    
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
        
      <Galaxy
        starSpeed={0.5}
        density={1}
        hueShift={140}
        speed={1}
        glowIntensity={0.15}
        saturation={0}
        mouseRepulsion
        repulsionStrength={2}
        twinkleIntensity={0.1}
        rotationSpeed={0.1}
        transparent
      />
    </div>
  )
}


export default GalaxyBackground
