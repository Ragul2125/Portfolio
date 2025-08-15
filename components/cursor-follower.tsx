"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Individual particle springs
  const particle1X = useSpring(cursorX, { damping: 22, stiffness: 350 })
  const particle1Y = useSpring(cursorY, { damping: 22, stiffness: 350 })
  const particle2X = useSpring(cursorX, { damping: 19, stiffness: 300 })
  const particle2Y = useSpring(cursorY, { damping: 19, stiffness: 300 })
  const particle3X = useSpring(cursorX, { damping: 16, stiffness: 250 })
  const particle3Y = useSpring(cursorY, { damping: 16, stiffness: 250 })
  const particle4X = useSpring(cursorX, { damping: 13, stiffness: 200 })
  const particle4Y = useSpring(cursorY, { damping: 13, stiffness: 200 })
  const particle5X = useSpring(cursorX, { damping: 10, stiffness: 150 })
  const particle5Y = useSpring(cursorY, { damping: 10, stiffness: 150 })

  // Glow spring
  const glowX = useSpring(cursorX, { damping: 30, stiffness: 200 })
  const glowY = useSpring(cursorY, { damping: 30, stiffness: 200 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseleave", hideCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseleave", hideCursor)
    }
  }, [cursorX, cursorY])

  const particles = [
    { x: particle1X, y: particle1Y, opacity: 0.5, scale: 0.85 },
    { x: particle2X, y: particle2Y, opacity: 0.4, scale: 0.7 },
    { x: particle3X, y: particle3Y, opacity: 0.3, scale: 0.55 },
    { x: particle4X, y: particle4Y, opacity: 0.2, scale: 0.4 },
    { x: particle5X, y: particle5Y, opacity: 0.1, scale: 0.25 },
  ]

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      {/* Trailing Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-40"
          style={{
            translateX: particle.x,
            translateY: particle.y,
          }}
          animate={{
            opacity: isVisible ? particle.opacity : 0,
            scale: isVisible ? particle.scale : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `hsl(${220 + i * 20}, 70%, ${60 + i * 5}%)`,
            }}
          />
        </motion.div>
      ))}

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-30"
        style={{
          translateX: glowX,
          translateY: glowY,
        }}
        animate={{
          opacity: isVisible ? 0.3 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl" />
      </motion.div>
    </>
  )
}
