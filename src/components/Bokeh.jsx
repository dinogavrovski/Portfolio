// src/components/BokehBackground.tsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const BokehBackground = () => {
  const particlesInit = async (engine) => {
    // load tsparticles package
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: { value: "transparent" }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: true
          }
        },
        particles: {
          number: {
            value: 1,
            density: { enable: true, area: 500 }
          },
          color: { value: "#77D1C4" }, // light bokeh color
          shape: { type: "circle" },
          opacity: {
            value: 0.1,
            random: { enable: true, minimumValue: 0.3 },
            anim: { enable: false, speed: 0.5, opacity_min: 0.3, sync: false }
          },
          size: {
            value: 500,
            random: { enable: true, minimumValue: 5 },
            anim: { enable: true, speed: 3, size_min: 5, sync: false }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" }
          },
          shadow: {
            blur:20,
            color: {value: "#A8E1D8"},
            enable: true,
          },
          collisions: {
            enable: true,
            mode: "bounce"
          }
        }
      }}
    />
  );
};
