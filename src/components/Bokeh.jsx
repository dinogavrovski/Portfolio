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
            value: 100,
            density: { enable: true, area: 800 }
          },
          color: { value: "#77D1C4" }, // light bokeh color
          shape: { type: "circle" },
          opacity: {
            value: 0.07,
            random: { enable: true, minimumValue: 0.01 },
            anim: { enable: false, speed: 0.5, opacity_min: 0.3, sync: false }
          },
          size: {
            value: 20,
            random: { enable: true, minimumValue: 5 },
            anim: { enable: true, speed: 3, size_min: 5, sync: false }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "up",
            random: true,
            straight: false,
            outModes: { default: "out" }
          },
          shadow: {
            blur:50,
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
