"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import AnimatedBackground from "@/components/animated-background"
import { ThemeProvider } from "@/components/theme-provider"
import CursorFollower from "@/components/cursor-follower"
import { Toaster } from "@/components/ui/toaster"
import ClientOnly from "@/components/client-only"

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeProvider>
        <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
        <ClientOnly>
          <AnimatedBackground />
          <CursorFollower />
        </ClientOnly>

        {/* Scroll Progress Bar */}
        <ClientOnly>
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 origin-left z-50"
            style={{ scaleX }}
          />
        </ClientOnly>

        <Navbar />

        <main className="relative z-10">
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Toaster />
      </div>
    </ThemeProvider>
  )
}
