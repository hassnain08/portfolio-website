import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  angle: number;
  radius: number;
  speed: number;
  length: number;
  opacity: number;
}

function makeParticle(seedRadius = 0): Particle {
  return {
    angle: Math.random() * Math.PI * 2,
    radius: seedRadius,
    speed: 0.25 + Math.random() * 0.6,
    length: 18 + Math.random() * 36,
    opacity: 0.15 + Math.random() * 0.35,
  };
}

function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      cx = width / 2;
      cy = height * 0.42;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const maxRadius = Math.hypot(width, height) * 0.65;
    const particles: Particle[] = Array.from({ length: 42 }, () =>
      makeParticle(Math.random() * maxRadius)
    );

    let raf = 0;

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        const x1 = cx + Math.cos(p.angle) * p.radius;
        const y1 = cy + Math.sin(p.angle) * p.radius * 0.6;
        ctx.beginPath();
        ctx.arc(x1, y1, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity * 0.6})`;
        ctx.fill();
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.radius += p.speed;
        if (p.radius > maxRadius) {
          Object.assign(p, makeParticle(0));
        }
        const fade = Math.min(1, p.radius / 80) * (1 - p.radius / maxRadius);
        const x1 = cx + Math.cos(p.angle) * p.radius;
        const y1 = cy + Math.sin(p.angle) * p.radius * 0.6;
        const x0 = cx + Math.cos(p.angle) * (p.radius - p.length);
        const y0 = cy + Math.sin(p.angle) * (p.radius - p.length) * 0.6;

        const grad = ctx.createLinearGradient(x0, y0, x1, y1);
        grad.addColorStop(0, "rgba(168, 85, 247, 0)");
        grad.addColorStop(1, `rgba(196, 141, 255, ${p.opacity * fade})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      });
      raf = requestAnimationFrame(tick);
    };

    if (reduceMotion) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-primary/40 to-accent/10 blur-3xl"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

export default HeroBackground;
