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



        function setup(){
            const dpr = Math.min(window.devicePixelRatio ||1, 2);
            const width = container.clientWidth;
            const height = container.clientHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }
    })
}