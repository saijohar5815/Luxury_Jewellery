"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
}

const HeroOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    const resizeCanvas = () => {
      // Set resolution to match the actual display size
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: -10,
      radius: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: 0,
      fadeSpeed: Math.random() * 0.005 + 0.002
    });

    for (let i = 0; i < 40; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < canvas.height * 0.2) p.opacity += p.fadeSpeed;
        else if (p.y > canvas.height * 0.8) p.opacity -= p.fadeSpeed;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0, Math.min(p.opacity, 0.8))})`;
        ctx.fill();

        if (p.y > canvas.height || p.opacity <= 0) particles[index] = createParticle();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particleCanvas} />;
};

export default HeroOverlay;