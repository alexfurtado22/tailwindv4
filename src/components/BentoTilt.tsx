import { useState, useRef } from 'react'

interface BentoTiltProps {
  children: React.ReactNode // Explicitly type the children prop
  className?: string
}

export const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState<string>('')
  const itemRef = useRef<HTMLDivElement | null>(null) // Explicitly type the ref

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()

    const relativeX = (event.clientX - left) / width
    const relativeY = (event.clientY - top) / height

    const tiltX = (relativeY - 0.5) * 5
    const tiltY = (relativeX - 0.5) * -5

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
    setTransformStyle(newTransform)
  }

  const handleMouseLeave = () => {
    setTransformStyle('')
  }

  return (
    <div
      ref={itemRef}
      className={`transition-transform ${className}`}
      style={{ transform: transformStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
