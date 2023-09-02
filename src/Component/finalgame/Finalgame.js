import React from "react";
import { Link } from "react-router-dom";
import check from "../assets/check.png";
import "./finalgame.css";

function Finalgame() {
  return (
    <div className="container">
      <div className="image-check">
        <img src={check} alt="check" className="check-img" />
        <div className="text">
          <h1 className="right-text">You're right!</h1>
          <p className="para-text">We're on our way to cover this currency!</p>
        </div>
      </div>

      <div>
        <Link to={"/form"}>
          <button className="play-btn">Play again</button>
        </Link>
        <button className="expert-btn">Find out more from our experts</button>
      </div>
    </div>
  );
}

export default Finalgame;
