// Hero.jsx
import { useState, useEffect, useRef } from "react";
import { SocialIcons } from "./SocialIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Refs for animation
  const heroRef = useRef();
  const titleRef = useRef();
  const logoRef = useRef();
  const socialsRef = useRef();
  const navbarRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for hero elements moving into navbar positions
      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            markers: false,
          },
        })
        .to(titleRef.current, { x: -200, y: -300, scale: 0.8 }, 0)
        .to(logoRef.current, { x: -200, y: -300, scale: 0.5 }, 0)
        .to(socialsRef.current, { x: 300, y: -300, scale: 0.8 }, 0)
        .to(
          navbarRef.current,
          { opacity: 1, pointerEvents: "auto", duration: 0.5 },
          0.1
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Parallax mouse movement
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
    <section
      ref={heroRef}
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20" />
      </div>

      {/* Navbar (fixed at top) */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-around opacity-0 pointer-events-none text-white"
      >
        <div className="flex items-center gap-2">
          <img src="/icons/aclogo.png" alt="aclogo" className="w-10 h-10" />
          <p>DINO.DEV</p>
        </div>
        <SocialIcons />
      </nav>

      {/* Hero content */}
      <div
        className="flex flex-col items-center text-white z-30 transition-transform duration-150 ease-out pointer-events-auto"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <img
          ref={logoRef}
          src="/icons/aclogo.png"
          alt="Logo"
          className="w-16 opacity-100 mb-5"
        />
        <h1 ref={titleRef} className="title text-4xl md:text-6xl font-bold">
          DINO.DEV
        </h1>
        <div ref={socialsRef} className="mt-4">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
