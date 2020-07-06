import React from "react";
import "./Logo.css";
import brain from "./brain.png";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className="logo ma2 ml4 mt0">
      <Tilt
        className="Tilt br2 shadow-2 pa2"
        options={{ max: 55 }}
        style={{ height: 130, width: 130 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img style={{ paddingTop: "5px" }} src={brain} alt="logo" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
