import React from "react";
import { useState, useEffect } from "react";
import StackIcon from "tech-stack-icons";
const GridLayout = () => {
  return (
    <>
      <div className="flex w-full min-h-screen relative z-10">
        <div className="flex justify-center items-start flex-col gap-3 w-1/2 p-[20vh] text-start">
          <h1 className="text-3xl font-bold mb-2">About me</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            consequuntur consequatur natus assumenda ab cum reiciendis, ipsum
            laudantium eligendi aut accusamus iure architecto obcaecati maxime
            laborum tempore quasi iusto veritatis.
          </p>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div className="grid grid-cols-2 gap-3 w-full p-[20vh]">
            <div
              className="grid-item col-span-1 aspect-[1/1] opacity-60
                        transition-transform duration-300 ease-in-out hover:scale-101
                        hover:opacity-100 rounded-lg relative flex justify-center items-center"
            >
              <StackIcon
                className=""
                name="nodejs"
                style={{ width: "15vh", height: "15vh" }}
              />
            </div>
            <div
              className="grid-item col-span-1 aspect-[1/1] opacity-60
        transition-transform duration-300 ease-in-out hover:scale-101 overflow-hidden
        hover:opacity-100 rounded-lg relative flex justify-center items-center"
            >
              <StackIcon
                className=""
                name="react"
                style={{ width: "15vh", height: "15vh" }}
              />
            </div>
            <div
              className="grid-item col-span-1 aspect-[1/1] opacity-60
        transition-transform duration-300 ease-in-out hover:scale-101
        hover:opacity-100 rounded-lg relative flex justify-center items-center"
            >
              <StackIcon
                className=""
                name="mongodb"
                style={{ width: "15vh", height: "15vh" }}
              />
            </div>
            <div
              className="grid-item col-span-1 aspect-[1/1] opacity-60
        transition-transform duration-300 hover:scale-101
        hover:opacity-100 rounded-lg relative flex justify-center items-center"
            >
              <StackIcon
                className=""
                name="expressjs"
                style={{ width: "15vh", height: "15vh" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridLayout;
