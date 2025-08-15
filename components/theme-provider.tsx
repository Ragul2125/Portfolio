"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const savedTheme = localStorage.getItem("theme") as Theme
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        setTheme(savedTheme)
      } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
      }
    } catch (error) {
      console.warn("Failed to load theme from localStorage:", error)
    }
  }, [])

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      try {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.setItem("theme", theme)
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error)
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Provide a default context value during SSR
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    mounted,
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    // Return a default theme during SSR to prevent errors
    return {
      theme: "light" as Theme,
      toggleTheme: () => {
        console.warn("Theme toggle called outside of ThemeProvider")
      },
      mounted: false,
    }
  }
  return context
}
