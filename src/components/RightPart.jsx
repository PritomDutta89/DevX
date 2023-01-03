import React from "react";
import "../style/Right_part.css";

const RightPart = ({ hours,animation }) => {
  return (
    <div className="Right" id={animation ? "rightpart_transform" : ""}>
      <div className="R1">
        <div className="b2"></div>
        <div className="b3">
          <div style={{ height: "50%" }}></div>
          <div className="b4"></div>
        </div>
        <div className="b1"></div>
        <div className="b1"></div>
        <div className="b1"></div>
        <div className="b1"></div>
        <div className="b1"></div>
        <p className="T1">{hours} hours left</p>
        <p className="T2">out of 50 hours</p>
      </div>
    </div>
  );
};

export default RightPart;
