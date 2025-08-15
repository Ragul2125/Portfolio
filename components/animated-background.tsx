"use client"

import { useEffect, useRef, useCallback } from "react"
import { useTheme } from "@/components/theme-provider"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const animationRef = useRef<number | undefined>(undefined)
  const shapesRef = useRef<FloatingShape[]>([])
  const orbsRef = useRef<GradientOrb[]>([])

  type ShapeType = "triangle" | "square" | "circle" | "hexagon"

  class FloatingShape {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    rotation: number
    rotationSpeed: number
    opacity: number
    type: ShapeType
    color: string

    constructor(canvasWidth: number, canvasHeight: number, currentTheme: string) {
      this.x = Math.random() * canvasWidth
      this.y = Math.random() * canvasHeight
      this.vx = (Math.random() - 0.5) * 0.3
      this.vy = (Math.random() - 0.5) * 0.3
      this.size = Math.random() * 30 + 10
      this.rotation = Math.random() * Math.PI * 2
      this.rotationSpeed = (Math.random() - 0.5) * 0.01
      this.opacity = Math.random() * 0.1 + 0.05
      this.type = ["triangle", "square", "circle", "hexagon"][
        Math.floor(Math.random() * 4)
      ] as ShapeType

      const colors =
        currentTheme === "dark"
          ? ["59, 130, 246", "147, 51, 234", "99, 102, 241", "168, 85, 247"]
          : ["37, 99, 235", "124, 58, 237", "79, 70, 229", "139, 92, 246"]
      this.color = colors[Math.floor(Math.random() * colors.length)]
    }

    update(canvasWidth: number, canvasHeight: number) {
      this.x += this.vx
      this.y += this.vy
      this.rotation += this.rotationSpeed

      if (this.x < -this.size) this.x = canvasWidth + this.size
      if (this.x > canvasWidth + this.size) this.x = -this.size
      if (this.y < -this.size) this.y = canvasHeight + this.size
      if (this.y > canvasHeight + this.size) this.y = -this.size
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.rotate(this.rotation)
      ctx.globalAlpha = this.opacity

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size)
      gradient.addColorStop(0, `rgba(${this.color}, 0.3)`)
      gradient.addColorStop(1, `rgba(${this.color}, 0)`)

      ctx.fillStyle = gradient
      ctx.strokeStyle = `rgba(${this.color}, 0.2)`
      ctx.lineWidth = 1

      switch (this.type) {
        case "circle":
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
          break
        case "square":
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
          ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
          break
        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -this.size / 2)
          ctx.lineTo(-this.size / 2, this.size / 2)
          ctx.lineTo(this.size / 2, this.size / 2)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          break
        case "hexagon":
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3
            const x = (Math.cos(angle) * this.size) / 2
            const y = (Math.sin(angle) * this.size) / 2
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          break
      }

      ctx.restore()
    }
  }

  class GradientOrb {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    hue: number
    hueSpeed: number

    constructor(canvasWidth: number, canvasHeight: number) {
      this.x = Math.random() * canvasWidth
      this.y = Math.random() * canvasHeight
      this.vx = (Math.random() - 0.5) * 0.2
      this.vy = (Math.random() - 0.5) * 0.2
      this.size = Math.random() * 200 + 100
      this.opacity = Math.random() * 0.03 + 0.01
      this.hue = Math.random() * 360
      this.hueSpeed = (Math.random() - 0.5) * 0.5
    }

    update(canvasWidth: number, canvasHeight: number) {
      this.x += this.vx
      this.y += this.vy
      this.hue += this.hueSpeed

      if (this.x < 0 || this.x > canvasWidth) this.vx *= -1
      if (this.y < 0 || this.y > canvasHeight) this.vy *= -1

      this.x = Math.max(0, Math.min(canvasWidth, this.x))
      this.y = Math.max(0, Math.min(canvasHeight, this.y))
    }

    draw(ctx: CanvasRenderingContext2D, currentTheme: string) {
      ctx.save()
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)

      if (currentTheme === "dark") {
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, ${this.opacity})`)
        gradient.addColorStop(0.5, `hsla(${this.hue + 60}, 70%, 50%, ${this.opacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${this.hue + 120}, 70%, 40%, 0)`)
      } else {
        gradient.addColorStop(0, `hsla(${this.hue}, 60%, 70%, ${this.opacity})`)
        gradient.addColorStop(0.5, `hsla(${this.hue + 60}, 60%, 60%, ${this.opacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${this.hue + 120}, 60%, 50%, 0)`)
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.restore()
    }
  }

  const createShapes = useCallback((canvas: HTMLCanvasElement, currentTheme: string) => {
    const shapes: FloatingShape[] = []
    const shapeCount = Math.floor((canvas.width * canvas.height) / 25000)
    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new FloatingShape(canvas.width, canvas.height, currentTheme))
    }
    return shapes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createOrbs = useCallback((canvas: HTMLCanvasElement) => {
    const orbs: GradientOrb[] = []
    for (let i = 0; i < 3; i++) {
      orbs.push(new GradientOrb(canvas.width, canvas.height))
    }
    return orbs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const drawMesh = useCallback((ctx: CanvasRenderingContext2D, currentTheme: string) => {
    const time = Date.now() * 0.0005
    const gridSize = 100

    ctx.strokeStyle = currentTheme === "dark" ? `rgba(59, 130, 246, 0.05)` : `rgba(37, 99, 235, 0.08)`
    ctx.lineWidth = 0.5

    for (let x = 0; x < ctx.canvas.width; x += gridSize) {
      for (let y = 0; y < ctx.canvas.height; y += gridSize) {
        const wave = Math.sin(time + x * 0.01 + y * 0.01) * 10
        ctx.beginPath()
        ctx.moveTo(x, y + wave)
        ctx.lineTo(x + gridSize, y + wave)
        ctx.stroke()
      }
    }
  }, [])

  const animate = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    orbsRef.current.forEach((orb) => { 
      orb.update(canvas.width, canvas.height)
      orb.draw(ctx, theme)
    })
    
    drawMesh(ctx, theme)
    
    shapesRef.current.forEach((shape) => { 
      shape.update(canvas.width, canvas.height)
      shape.draw(ctx)
    })
    
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx))
  }, [theme, drawMesh])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    
    // Create initial shapes and orbs
    shapesRef.current = createShapes(canvas, theme)
    orbsRef.current = createOrbs(canvas)

    // Start animation
    animate(canvas, ctx)

    const handleResize = () => {
      resizeCanvas()
      shapesRef.current = createShapes(canvas, theme)
      orbsRef.current = createOrbs(canvas)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme, createShapes, createOrbs, animate])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
        opacity: theme === "dark" ? 0.6 : 0.4,
      }}
    />
  )
}
