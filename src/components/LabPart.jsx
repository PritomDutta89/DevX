import React, { useState, useEffect, useRef } from "react";
import Login from "./Login";
import "../style/lab.css";

const LabPart = ({ Time, password }) => {
  const [pass, setPass] = useState(password);
  const [timeRemaining, setTimeRemaining] = useState(Time);

  useEffect(() => {
    handleTime();
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);
  }

  const handleExitClick = () => {
    console.log("logout successful");
    clearInterval(id.current);
    setPass("");
  };

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <>
      {pass && timeRemaining >= 0 ? (
        <div className="Lab_wrapper">
          <div className="Lab_wrapper1">
            <p className="L1">
              <span className="L2"> Time remaining: </span>
              <span className="L3">
                {hours}h {minutes}m {seconds}s
              </span>
            </p>
          </div>
          <div>
            <button onClick={handleExitClick} className="btn">Exit</button>
          </div>
        </div>
      ) : (
        <Login newTimeRemaining={timeRemaining} truee={true} />
      )}
    </>
  );
};

export default LabPart;
