import React from "react";
import { useState, useEffect } from "react";

const GridLayout = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="grid grid-cols-4 gap-3 w-full h-full p-[100px]">
        <div
          className="col-span-2 row-span-2 bg-yellow-500 min-h-[100px] opacity-60
                        transition-transform duration-300 ease-in-out hover:scale-101
                        hover:opacity-100 rounded-sm relative"
        ></div>
        <div
          className="col-span-2 bg-orange-500 min-h-[100px] opacity-60
        transition-transform duration-300 ease-in-out hover:scale-101 overflow-hidden
        hover:opacity-100 rounded-sm relative" 
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/mern.png"
            alt="Tech Stack"
          />
        </div>
        <div
          className="col-span-1 bg-blue-500 min-h-[100px] opacity-60
        transition-transform duration-300 ease-in-out hover:scale-101
        hover:opacity-100 rounded-sm relative"
        ></div>
        <div
          className="col-span-1 bg-pink-500 min-h-[100px] opacity-60
        transition-transform duration-300 hover:scale-101
        hover:opacity-100 rounded-sm relative"
        ></div>
        <div
          className="col-span-2 bg-green-500 min-h-[100px] opacity-60
        transition-transform duration-300 ease-in-out hover:scale-101
        hover:opacity-100 rounded-sm relative"
        ></div>
        <div
          className="col-span-1 bg-purple-500 min-h-[100px] opacity-60
        transition-transform duration-300 ease-in-out hover:scale-101
        hover:opacity-100 rounded-sm relative"
        ></div>
        <div
          className="col-span-1 bg-red-500 min-h-[100px] opacity-60
        transition-transform duration-300 ease-in-out hover:scale-101
        hover:opacity-100 rounded-sm relative"
        ></div>
      </div>
    </div>
  );
};

export default GridLayout;
