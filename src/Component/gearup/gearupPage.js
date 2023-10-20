import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./gearup.css";
import LottieCube from "../assets/LottieCube/LottieCube";
import GameModeContext, { GAME_MODE } from "../../context/gameContext";

function GearupPage() {
    const navigate = useNavigate();
    const { gameMode } = React.useContext(GameModeContext)
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
          navigate("/instructions");
        }, 3000);
        return () => clearTimeout(loadingTimeout);
    }, []);



    return GearUpScreen[gameMode];
}

const GearUpScreen = {
    [GAME_MODE.ADVANCED]:
        <div className="container container-centered">
            <h1 className="title">Put your game</h1>
            <h1 className="title">face on and</h1>
            <h1 className="sub-title">gear up</h1>
            <h1 className="title">for the currency</h1>
            <h1 className="title">challenge</h1>
            <LottieCube className="loader" />
        </div>
    ,
    [GAME_MODE.EASY]: <div className="container container-centered">
        <h1 className="title">Preparing</h1>
        <h1 className="title">Questions...</h1>
        <LottieCube className="loader" />
    </div>
}

export default GearupPage;
