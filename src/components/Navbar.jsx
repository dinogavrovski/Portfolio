import React, { forwardRef } from "react";
import { SocialIcons } from "./SocialIcons";

const Navbar = forwardRef((props, ref) => {
  return (
    <nav
      ref={ref} // Forward the ref
      className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex items-center justify-between opacity-0 pointer-events-none text-white"
    >
      <div className="flex items-center gap-2">
        <p>DINO.DEV</p>
      </div>
      <SocialIcons />
    </nav>
  );
});

export default Navbar;
