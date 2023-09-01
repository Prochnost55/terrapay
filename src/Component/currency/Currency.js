import React from "react";
import { useNavigate } from "react-router-dom";
import quesGirl from "../assets/3d00796 1.png";
import './currency.css';

function Currency() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details");
  };
  return (
    <div className="container container-game">
      <h1 className="title">Guess</h1>
      <p className="sub-title">the currencies TerraPay does not support</p>
      <img src={quesGirl} alt="girl" className="girl-img" />
    </div>
  );
}

export default Currency;
