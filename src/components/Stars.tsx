import { useRef, useEffect } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    pz: number;
}

export function Stars() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let stars: Star[] = [];
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const numStars = 800;
        const speed = 2.5;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width * 2 - width,
                    y: Math.random() * height * 2 - height,
                    z: Math.random() * width,
                    pz: Math.random() * width,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            stars.forEach((star) => {
                star.z -= speed;

                if (star.z < 1) {
                    star.x = Math.random() * width * 2 - width;
                    star.y = Math.random() * height * 2 - height;
                    star.z = width;
                    star.pz = width;
                }

                const sx = (star.x / star.z) * width + cx;
                const sy = (star.y / star.z) * height + cy;

                const px = (star.x / star.pz) * width + cx;
                const py = (star.y / star.pz) * height + cy;

                star.pz = star.z;

                // Size gets bigger as it comes closer
                const radius = Math.max(0.1, (1 - star.z / width) * 2.5);

                // Alpha gets brighter as it comes closer
                const alpha = Math.max(0.1, 1 - star.z / width);

                // Draw the star trail (warp effect)
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.lineWidth = radius;
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        initStars();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-70">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ display: "block" }}
            />
        </div>
    );
}
