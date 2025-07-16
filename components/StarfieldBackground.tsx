import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  trail: { x: number; y: number; opacity: number }[];
}

interface Explosion {
  x: number;
  y: number;
  particles: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    color: string;
    size: number;
  }[];
  life: number;
  maxLife: number;
  showText?: boolean;
  textOpacity?: number;
}

const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const explosionsRef = useRef<Explosion[]>([]);

  const colors = [
    '#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE',
    '#85C1E9', '#F8C471', '#82E0AA', '#F1948A', '#AED6F1'
  ];

  const createStar = (canvas: HTMLCanvasElement): Star => {
    return {
      x: Math.random() * canvas.width,
      y: -10,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 3 + 2,
      size: Math.random() * 3 + 1,
      life: 1,
      maxLife: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      trail: []
    };
  };

  const createExplosion = (x: number, y: number): Explosion => {
    const particleCount = Math.random() * 20 + 15;
    const particles = [];
    const showText = Math.random() < 0.15; // 15% chance to show "Papiweb"
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
      const speed = Math.random() * 4 + 2;
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        color: showText ? '#FFD700' : colors[Math.floor(Math.random() * colors.length)], // Gold for text explosions
        size: Math.random() * 3 + 1
      });
    }

    return {
      x,
      y,
      particles,
      life: 1,
      maxLife: 1,
      showText,
      textOpacity: showText ? 1 : 0
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    for (let i = 0; i < 30; i++) {
      starsRef.current.push(createStar(canvas));
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      starsRef.current.forEach((star, index) => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Add to trail
        star.trail.push({ x: star.x, y: star.y, opacity: 1 });
        if (star.trail.length > 10) {
          star.trail.shift();
        }

        // Update trail opacity
        star.trail.forEach((point, i) => {
          point.opacity = i / star.trail.length;
        });

        // Draw trail
        star.trail.forEach((point, i) => {
          if (i > 0) {
            const prevPoint = star.trail[i - 1];
            ctx.strokeStyle = `${star.color}${Math.floor(point.opacity * 100).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = star.size * point.opacity;
            ctx.beginPath();
            ctx.moveTo(prevPoint.x, prevPoint.y);
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
          }
        });

        // Draw star
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Random explosion chance
        if (Math.random() < 0.005 && star.y > 50) {
          explosionsRef.current.push(createExplosion(star.x, star.y));
          starsRef.current[index] = createStar(canvas);
        }

        // Remove stars that are off screen
        if (star.y > canvas.height + 10 || star.x < -10 || star.x > canvas.width + 10) {
          starsRef.current[index] = createStar(canvas);
        }
      });

      // Update and draw explosions
      explosionsRef.current.forEach((explosion, explosionIndex) => {
        explosion.life -= 0.02;
        
        // Update text opacity for Papiweb text
        if (explosion.showText && explosion.textOpacity !== undefined) {
          explosion.textOpacity = Math.max(0, explosion.life);
        }

        explosion.particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += 0.1; // gravity
          particle.vx *= 0.98; // friction
          particle.life -= 0.02;

          const alpha = Math.max(0, particle.life);
          ctx.fillStyle = `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 5;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // Draw "Papiweb" text with professional effects
        if (explosion.showText && explosion.textOpacity && explosion.textOpacity > 0) {
          const textAlpha = explosion.textOpacity;
          
          // Main text with multiple layers for depth
          ctx.font = 'bold 32px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Outer glow layer
          ctx.shadowColor = '#FFD700';
          ctx.shadowBlur = 20;
          ctx.fillStyle = `rgba(255, 215, 0, ${textAlpha * 0.8})`;
          ctx.fillText('Papiweb', explosion.x, explosion.y);
          
          // Secondary glow
          ctx.shadowColor = '#FFA500';
          ctx.shadowBlur = 15;
          ctx.fillStyle = `rgba(255, 165, 0, ${textAlpha * 0.9})`;
          ctx.fillText('Papiweb', explosion.x, explosion.y);
          
          // Inner glow
          ctx.shadowColor = '#FFFFFF';
          ctx.shadowBlur = 8;
          ctx.fillStyle = `rgba(255, 255, 255, ${textAlpha})`;
          ctx.fillText('Papiweb', explosion.x, explosion.y);
          
          // Core text
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 215, 0, ${textAlpha})`;
          ctx.fillText('Papiweb', explosion.x, explosion.y);
          
          // Add animated sparkles around the text
          for (let i = 0; i < 8; i++) {
            const sparkleAngle = (Date.now() * 0.005 + i * Math.PI / 4) % (Math.PI * 2);
            const sparkleDistance = 50 + Math.sin(Date.now() * 0.01 + i) * 10;
            const sparkleX = explosion.x + Math.cos(sparkleAngle) * sparkleDistance;
            const sparkleY = explosion.y + Math.sin(sparkleAngle) * sparkleDistance;
            
            ctx.fillStyle = `rgba(255, 255, 255, ${textAlpha * 0.8})`;
            ctx.shadowColor = '#FFD700';
            ctx.shadowBlur = 5;
            ctx.beginPath();
            ctx.arc(sparkleX, sparkleY, 2 * textAlpha, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        if (explosion.life <= 0) {
          explosionsRef.current.splice(explosionIndex, 1);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default StarfieldBackground;
