import React, { memo } from "react";
import VantaBackground from "./Background";
import { BokehBackground } from "./Bokeh";

const StaticBackground = memo(() => (
  <div className="absolute inset-0 z-0">
    <VantaBackground />
    <BokehBackground />
  </div>
));

export default StaticBackground;
