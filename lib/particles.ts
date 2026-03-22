interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  opacityDecay: number;
}

export function initParticles(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  theme: 'purple' | 'green' = 'purple',
  density: number = 100
): (() => void) | undefined {
  const particles: Particle[] = [];
  let animationId: number;

  // Color palette based on theme
  const colors = {
    purple: {
      primary: '#8b5cf6',
      accent: '#00d9ff',
      secondary: '#a78bfa',
    },
    green: {
      primary: '#10b981',
      accent: '#00d9ff',
      secondary: '#34d399',
    },
  };

  const palette = colors[theme];

  // Initialize particles
  const initializeParticles = () => {
    particles.length = 0;
    const particleCount = Math.floor((canvas.width * canvas.height) / (1000 / density));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        opacityDecay: Math.random() * 0.001 + 0.0005,
      });
    }
  };

  // Draw particles
  const draw = () => {
    // Clear canvas with slight trail effect
    ctx.fillStyle = 'rgba(10, 0, 20, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around screen
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Fade in/out
      particle.opacity -= particle.opacityDecay;
      if (particle.opacity < 0.1) {
        particle.opacity = Math.random() * 0.5 + 0.3;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
      }

      // Draw particle
      ctx.fillStyle = palette.primary;
      ctx.globalAlpha = particle.opacity * 0.6;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw glow effect for some particles
      if (index % 5 === 0) {
        ctx.fillStyle = palette.accent;
        ctx.globalAlpha = particle.opacity * 0.2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw connecting lines between nearby particles
    ctx.strokeStyle = palette.primary;
    ctx.globalAlpha = 0.1;
    ctx.lineWidth = 1;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
  };

  const animate = () => {
    draw();
    animationId = requestAnimationFrame(animate);
  };

  initializeParticles();
  animate();

  // Return cleanup function
  return () => {
    cancelAnimationFrame(animationId);
  };
}
