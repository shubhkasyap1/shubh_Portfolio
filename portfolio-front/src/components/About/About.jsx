import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
import avtar from '../../Images/avtar.jpg'

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>ABCD</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={avtar} alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Shubham Kumar
          </Typography>

          <Typography>Full Stack Developer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            CS Student
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Busy in building my Empire
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;