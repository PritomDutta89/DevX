import React, { useState, useEffect } from "react";
import LabPart from "./LabPart";
import "../style/login_page.css";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import {keyframes, styled} from "@mui/material";

import Leftpart from "./Leftpart";
import RightPart from "./RightPart";

let x = 36000 * 5;

const Icon = styled(FingerprintIcon)(({ theme }) => ({
  fontSize: "5.625rem",
  marginTop: "-1rem",
  color: "rgb(8, 190, 236)",
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
    marginBottom: "0.2rem",
    marginRight: "0.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
    marginTop: "0.1rem",
    marginRight: "0.2rem",
  },
}));
  




const Login = ({ newTimeRemaining = 36000 * 5, truee = false }) => {
  const [password, setPassword] = useState("");
  const [openPage, setOpenPage] = useState(false);
  const [animation, setAnimation] = useState(false);

  if (truee) {
    x = newTimeRemaining;
  }

  useEffect(() => {
    if (animation) {
      const el = document.getElementById('Container1');
      el.style.transform = 'rotate(20deg)';
      
    }
  }, [animation]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password === "12345") {
      console.log("login successful");
      setAnimation(true);
      setTimeout(()=>{
        setOpenPage(true);
      },1000)
      
    } else {
      alert("Incorrect Password");
    }
  };

  const hours = Math.floor(newTimeRemaining / 3600);

  return (
    <>
      {openPage ? (
        <LabPart Time={x} password={password} />
      ) : (
        <div className="Page">
          {/* Left part */}
          <Leftpart animation={animation}/>

          {/* Login part */}
          <div className="Container" id={animation ? "Container1" : ""}>
            <div className="Login">
              <div className="icon">
                <Icon />
              </div>
              <form onSubmit={handleFormSubmit} >
                <label
                className="input_form1"
                >
                  ENTER YOUR PILEARNING PASSWORD
                </label>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="input_form"
                />
                <br /> <br />
                <div className="btn1">
                  <button type="submit" className="btn">
                    Enter Lab
                  </button>
                  <br /> <br />
                </div>
              </form>
            </div>
          </div>

          {/* Right part */}
          <RightPart hours={hours} animation={animation}/>

        </div>
      )}
    </>
  );
};

export default Login;
