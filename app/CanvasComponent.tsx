"use client"

import { useEffect, useRef } from "react"

export default function CanvasComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      console.error("Canvas element not found!")
      return
    }
    
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      console.error("Canvas context not found!")
      return
    }

    // Clear canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw a red rectangle
    ctx.fillStyle = "red"
    ctx.fillRect(20, 20, 150, 100)
  }, [])

  return <canvas ref={canvasRef} id="myCanvas" width="500" height="500" className="hidden"></canvas>
}
