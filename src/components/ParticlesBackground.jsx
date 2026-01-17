import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground({ theme = "purple" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const color = theme === "green" ? "#22c55e" : "#8b5cf6";
  const colorArray = theme === "green"
    ? ["#22c55e", "#16a34a", "#15803d"]
    : ["#8b5cf6", "#a78bfa", "#c4b5fd"];

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: ["grab", "bubble"],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.6
              }
            },
            bubble: {
              distance: 250,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: colorArray,
          },
          links: {
            color: color,
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
          },
          shape: {
            type: ["circle", "edge", "triangle"],
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.5,
                sync: false
            }
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
