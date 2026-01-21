import React, { useCallback, useEffect, useRef } from 'react'

import './SpotLight.css'

interface SpotLightProps {
    children: React.ReactNode
}

export const SpotLight = ({ children }: SpotLightProps): React.ReactElement => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const backgroundColor = 'rgba(0,0,0, 0.9)'

    useEffect(() => {
        const handleResize = (): void => {
            const canvas = canvasRef.current
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        // Draw a background color on the canvas
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')
        if (!context) return
        if (!canvas) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        context.fillStyle = backgroundColor
        context.fillRect(0, 0, canvas.width, canvas.height)

        // Find mid for x and y
        const x = canvas.width / 2
        const y = canvas.height / 2

        drawCircle(context, x, y)
    }, [])

    const drawBackground = useCallback((context: CanvasRenderingContext2D): void => {
        context.fillStyle = backgroundColor
        context.fillRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0)
    }, [])

    const drawCircle = useCallback((context: CanvasRenderingContext2D, x: number, y: number): void => {
        const canvas = canvasRef.current

        if (!canvas) return

        context.clearRect(0, 0, canvas.width, canvas.height)

        drawBackground(context)

        context.beginPath()
        context.arc(x, y, 310, 0, Math.PI * 2)
        context.fillStyle = 'rgba(255, 255, 255, 1)'
        context.fill()
        
        // Set a background for everything outside the circle
        context.globalCompositeOperation = 'destination-out'
        context.beginPath()
        context.arc(x, y, 310, 0, Math.PI * 2)
        context.fill()
        context.globalCompositeOperation = 'source-over'
    }, [])

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')
        if (!context) return
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        drawCircle(context, x, y)
    }, [])

    return (
        <div className="spot-light-react" onMouseMove={handleMouseMove}>
            {children}
            <canvas className="spot-light-react-canvas" ref={canvasRef} />
        </div>
    )
}
