import { useState, useEffect } from "react";
import "./App.css";
import StaticBackground from "./components/StaticBackground";
import GridLayout from "./components/GridLayout";
import Hero from "./components/Hero";
import Gradient from "./components/Gradient";

export default function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden text-white">
      {/* Backgrounds */}
      <StaticBackground />
      <Gradient />

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <GridLayout />
      </main>
    </div>
  );
}
