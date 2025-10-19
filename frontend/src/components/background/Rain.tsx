import { useEffect, useRef } from "react";

interface RainDrop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  drift: number;
}

const Rain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const rainDrops: RainDrop[] = [];
    const numRain = 400;

    for (let i = 0; i < numRain; i++) {
      rainDrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 25 + 10,
        speed: Math.random() * 8 + 4,
        opacity: Math.random() * 0.4 + 0.4,
        drift: Math.random() * 0.5 - 0.25,
      });
    }

    let animationFrameId: number;
    let wind = 1.2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < rainDrops.length; i++) {
        const drop = rainDrops[i];
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(drop.x, drop.y, drop.x, drop.y + drop.length);
        gradient.addColorStop(0, `rgba(174,194,224,${drop.opacity})`);
        gradient.addColorStop(1, `rgba(174,194,224,0)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + wind, drop.y + drop.length);
        ctx.stroke();
        drop.x += drop.drift + wind;
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        pointerEvents: "none", //so that it acts as an overlay
      }}
    />
  );
};

export default Rain;
