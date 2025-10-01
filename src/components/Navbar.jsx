import React from "react";
import { SocialIcons } from "./SocialIcons";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex items-center justify-around opacity-0 pointer-events-none"
    >
      <div className="flex items-center gap-2">
        <img src="icons/aclogo.png" alt="aclogo" className="w-10 h-10" />
        <p>DINO.DEV</p>
      </div>

      <SocialIcons />
    </nav>
  );
};

export default Navbar;
