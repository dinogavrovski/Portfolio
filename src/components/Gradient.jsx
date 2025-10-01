import React from "react";

const Gradient = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20" />
    </div>
  );
};

export default Gradient;
