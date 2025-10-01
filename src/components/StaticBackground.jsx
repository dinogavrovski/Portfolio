import React, { memo } from "react";
import VantaBackground from "./Background";
import { BokehBackground } from "./Bokeh";

const StaticBackground = memo(() => (
  <div className="absolute top-0 left-0 w-full h-full z-0">
    <VantaBackground />
    <BokehBackground />
  </div>
));

export default StaticBackground;
