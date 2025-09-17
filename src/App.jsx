import { useState, useEffect } from "react";
import "./App.css";
import StaticBackground from "./components/StaticBackground";
import { SocialIcons } from "./components/SocialIcons";

export default function App() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 200;
      const y = (e.clientY - window.innerHeight / 2) / 200;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <StaticBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div
          className="flex flex-col items-center text-white transition-transform duration-150 ease-out pointer-events-auto"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <img
            src="/icons/aclogo.png"
            alt="Logo"
            className="w-16 opacity-100 mb-5"
          />
          <h1 className="title">DINO.DEV</h1>
          <SocialIcons />
          <p className="mt-5 text-lg tracking-widest animate-pulse">
            press any key
          </p>
        </div>
      </div>
    </div>
  );
}
