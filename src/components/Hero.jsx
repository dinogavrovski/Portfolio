import { useRef, useState, useEffect } from "react";
import { SocialIcons } from "./SocialIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ navbarRef }) {
  const heroRef = useRef();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        })
        .to(heroRef.current, { opacity: 0, duration: 0.5 })
        .to(
          navbarRef.current,
          { opacity: 1, pointerEvents: "auto", duration: 0.5 },
          0
        );
    }, heroRef);

    return () => ctx.revert();
  }, [navbarRef]);

  // Parallax mouse movement (optional)
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
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20" />
      </div>

      {/* Hero content */}
      <div
        className="flex flex-col items-center text-white z-30 transition-transform duration-150 ease-out pointer-events-auto"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <h1 className="title text-4xl md:text-6xl font-bold">DINO.DEV</h1>
        <div className="mt-4">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
