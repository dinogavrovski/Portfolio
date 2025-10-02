import { useRef } from "react";
import "./App.css";
import Gradient from "./components/Gradient";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GridLayout from "./components/GridLayout";
import StaticBackground from "./components/StaticBackground";

export default function App() {
  const navbarRef = useRef(null); // Create the ref

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden text-white">
      <Gradient />
      <StaticBackground />

      {/* Navbar always rendered; animation handled in Hero */}
      <Navbar ref={navbarRef} />

      <main className="relative z-10">
        {/* Pass the ref down to Hero */}
        <Hero navbarRef={navbarRef} />
        <GridLayout />
      </main>
    </div>
  );
}
