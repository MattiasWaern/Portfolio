import { useRef, useEffect } from "react";


// Återanvändbar bakgrundskomponent.

function FlickeringGrid({
    squareSize = 4,
    gridGap = 6,
    flickerChance = 0.3,
    color = "110, 231, 183", // rgb
    maxOpacity = 0.5,
}) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const ctx = canvas.getContext("2d");
        let animationId;
        let sqaures = null;
        let cols = 0;
        let rows = 0;
    })
}