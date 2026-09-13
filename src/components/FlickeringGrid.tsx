import { useEffect, useRef } from "react";
import "../styles/FlickeringGrid.css";

interface FlickeringGridProps {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    maxOpacity?: number;
}

function FlickeringGrid({
    squareSize = 4,
    gridGap = 6,
    flickerChance = 0.3,
    color = "110, 231, 183",
    maxOpacity = 0.5,
}: FlickeringGridProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;

        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        let animationId: number;

        let squares = new Float32Array(0);
        let cols = 0;
        let rows = 0;

        const setup = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            if (!width || !height) return;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const cellSize = squareSize + gridGap;

            cols = Math.ceil(width / cellSize);
            rows = Math.ceil(height / cellSize);

            squares = new Float32Array(cols * rows);

            for (let i = 0; i < squares.length; i++) {
                squares[i] = Math.random() * maxOpacity;
            }
        };

        const updateSquares = () => {
            for (let i = 0; i < squares.length; i++) {
                if (Math.random() < flickerChance * 0.03) {
                    squares[i] = Math.random() * maxOpacity;
                }
            }
        };

        const drawGrid = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            ctx.clearRect(0, 0, width, height);

            const cellSize = squareSize + gridGap;

            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    const index = x * rows + y;
                    const opacity = squares[index];

                    ctx.fillStyle = `rgba(${color}, ${opacity})`;

                    ctx.fillRect(
                        x * cellSize,
                        y * cellSize,
                        squareSize,
                        squareSize
                    );
                }
            }
        };

        const animate = () => {
            updateSquares();
            drawGrid();

            animationId = requestAnimationFrame(animate);
        };

        setup();
        animate();

        const handleResize = () => {
            setup();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, [
        squareSize,
        gridGap,
        flickerChance,
        color,
        maxOpacity,
    ]);

    return (
        <div ref={containerRef} className="flickering-grid">
            <canvas ref={canvasRef} />
        </div>
    );
}

export default FlickeringGrid;

