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
          detect_on: "window",
          events: {
            onHover: { enable: true, mode: "twinkle"},
            onClick: { enable: false },
            resize: true
          },
        },
        particles: {
          number: {
            value: 20,
            density: { enable: true, area: 800 }
          },
          color: { value: "#189A80" },
          shape: { type: "circle" },
          opacity: {
            value: 0.05,
            random: { enable: true, minimumValue: 0.01 },
            anim: { enable: false, speed: 0.2, opacity_min: 0.01, sync: false }
          },
          size: {
            value: 25,
            random: { enable: true, minimumValue: 1 },
            anim: { enable: true, speed: 1, size_min: 5, sync: false }
          },
          move: {
            enable: true,
            speed: 5,
            direction: "up",
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
            enable: false,
            mode: "bounce"
          }
        }
      }}
    />
  );
};
