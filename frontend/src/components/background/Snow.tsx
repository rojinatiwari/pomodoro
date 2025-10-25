import { useEffect,useRef } from "react";

interface SnowFlake{
    x:number;
    y:number;
    radius:number;
    speed:number;
    drift:number;
    opacity:number;
}

const Snow: React.FC = () => {
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

     const snowFlakes: SnowFlake[] = [];
    const numSnow = 400;

    for (let i = 0; i < numSnow; i++) {
      snowFlakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * Math.PI + 0.5,
        speed: Math.random() * 1 ,
        opacity: Math.random() * 0.4 + 0.4,
        drift: Math.random() * 0.5 - 0.25,
      });
    }

     let animationFrameId: number;
    let wind = 1;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < snowFlakes.length; i++) {
        const flake = snowFlakes[i];
         ctx.beginPath();
    const gradient = ctx.createLinearGradient(flake.x, flake.y, flake.x, flake.y + flake.radius * 2);
    gradient.addColorStop(0, `rgba(255,255,255,${flake.opacity})`);
    gradient.addColorStop(1, `rgba(255,255,255,0)`);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = flake.radius+0.5;
    ctx.moveTo(flake.x, flake.y);
    ctx.lineTo(flake.x + flake.speed * 2, flake.y + flake.radius * 2);
    ctx.stroke();
        flake.x += flake.drift +wind*0.5;
        flake.y += flake.speed+0.25;
        if (flake.y > canvas.height) {
          flake.y = -20;
          flake.x = Math.random() * canvas.width;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

     animate();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);

    }
    },[])

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
        pointerEvents: "none", 
      }}
    />
  );
}
export default Snow;