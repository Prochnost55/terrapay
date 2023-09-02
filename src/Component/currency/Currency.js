import React from "react";
import { useNavigate } from "react-router-dom";
import quesGirl from "../assets/questionGirl.png";
import './currency.css';
import RedirectionBar from "../RedirectionBar/RedirectionBar";

function Currency() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/details");
    };
    return (
        <>
            <RedirectionBar to={'/details'} />
            <div className="container container-game" onClick={handleClick}>
                <h1 className="title">Guess</h1>
                <p className="sub-title">the currencies TerraPay does not support</p>
                <img src={quesGirl} alt="girl" className="girl-img" />
            </div>
        </>

    );
}

export default Currency;
