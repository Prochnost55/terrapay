import React from "react";
import { useNavigate } from "react-router-dom";
import dulux from "../Assets/Dulux_solid_rgb.png";
import quesGirl from "../Assets/3d00796 1.png";

function Currency() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details");
  };
  return (
    <div className="container">
      <h1 className="sub-title">Guess</h1>
      <p className="title">the currencies TerraPay does not support</p>
      <div>
        <img src={dulux} alt="dulux" onClick={handleClick} />
        <img src={dulux} alt="dulux" onClick={handleClick} />
        <img src={dulux} alt="dulux" onClick={handleClick} />
      </div>
      <img src={quesGirl} alt="girl" className="girl-img" />
    </div>
  );
}

export default Currency;
