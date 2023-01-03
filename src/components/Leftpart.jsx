import React,{useEffect} from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { styled } from "@mui/material";
import "../style/Left_part.css";

const FitnessIcon = styled(FitnessCenterIcon)(({ theme }) => ({
  marginRight: "1.5rem",
  border: "1px solid rgb(8, 190, 236)",
  fontSize: "3rem",
  padding: "0.875rem",
  color: "rgb(8, 190, 236)",
  [theme.breakpoints.down("lg")]: {
    marginRight: "1rem",
    fontSize: "2rem",
    padding: "0.4rem",
  },
  [theme.breakpoints.down("md")]: {
    marginRight: "0.7rem",
    fontSize: "1.3rem",
    padding: "0.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "0.4rem",
    fontSize: "0.7rem",
    height: "1rem",
    padding: "0.2rem", 
  },
}));

const ChartIcon = styled(ShowChartIcon)(({ theme }) => ({
  marginRight: "1.5rem",
  border: "1px solid rgb(8, 190, 236)",
  fontSize: "3rem",
  padding: "0.875rem",
  color: "rgb(8, 190, 236)",
  [theme.breakpoints.down("lg")]: {
    marginRight: "1rem",
    fontSize: "2rem",
    padding: "0.4rem",
  },
  [theme.breakpoints.down("md")]: {
    marginRight: "0.7rem",
    fontSize: "1.3rem",
    padding: "0.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "0.4rem",
    fontSize: "0.6rem",
    padding: "0.2rem", 
    height: "1rem",
  },
}));

const TimerIcon = styled(AvTimerIcon)(({ theme }) => ({
  marginRight: "1.5rem",
  border: "1px solid rgb(8, 190, 236)",
  fontSize: "3rem",
  padding: "0.875rem",
  color: "rgb(8, 190, 236)",
  [theme.breakpoints.down("lg")]: {
    marginRight: "1rem",
    fontSize: "2rem",
    padding: "0.4rem",
  },
  [theme.breakpoints.down("md")]: {
    marginRight: "0.7rem",
    fontSize: "1.3rem",
    padding: "0.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "0.4rem",
    fontSize: "0.6rem",
    padding: "0.2rem", 
    height: "1rem",
  },
}));

const Leftpart = ({animation}) => {

  return (
    <div className="Left" id={animation ? "leftpart_transform" : ""}>
      <div className="Left1">
        <div className="Left_wrapper">
          <h1 className="Left_s3">Java</h1>
          <p className="Left_s4">
            <span className="Left_s1"> This course is provisioned by </span>{" "}
            <span className="Left_s2">Nexxt Labs</span>
          </p>
          <ul className="Left_wrapper1">
            <li>Labs</li>
            <li>Exercises</li>
            <li>Do it Yourself</li>
          </ul>
        </div>

        <div className="Left_wrapper2">
          <div className="Lw1">
            <FitnessIcon />
            <div className="Lw2">
              <p className="Lw5">EXERCISES</p>
              <p>
                <span className="Lw3">9</span>{" "}
                <span className="Lw4"> completed out of 84 </span>
              </p>
            </div>
          </div>

          <div className="Lw1">
            <ChartIcon />
            <div className="Lw2">
              <p className="Lw5">PROJECTS</p>
              <p>
                <span className="Lw3">2</span>{" "}
                <span className="Lw4"> completed out of 6</span>
              </p>
            </div>
          </div>

          <div className="Lw1">
            <TimerIcon />
            <div className="Lw2">
              <p className="Lw5">TIME SPENT</p>
              <p>
                <span className="Lw3">5</span>{" "}
                <span className="Lw4"> hours till now </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftpart;
