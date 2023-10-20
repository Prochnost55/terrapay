import React from "react";
import { useNavigate } from "react-router-dom";
import quesGirl from "../Assets/questionGirl.png";
import hat from "../Assets/hat.png";
import './instructions.css';
import RedirectionBar from "../RedirectionBar/RedirectionBar";
import GameModeContext, { GAME_MODE } from "../../context/gameContext";
function Instructions() {
    const navigate = useNavigate();
    const {gameMode} = React.useContext(GameModeContext);
    const handleClick = () => {
        navigate("/game");
    };
    
    return InstructionsScreen[gameMode]({handleClick});
}

const InstructionsScreen = {
    [GAME_MODE.ADVANCED]: ({ handleClick }) => (
        <>
            <RedirectionBar to={'/game'} />
            <div className="container container-game" onClick={handleClick}>
                <h1 className="title">Guess</h1>
                <p className="sub-title">the currencies TerraPay</p>
                <p className="sub-title">does not support</p>
                <img src={quesGirl} alt="girl" className="girl-img" />
            </div>
        </>
    )
    ,
    [GAME_MODE.EASY]: ({ handleClick }) => (
        <>
            <RedirectionBar to={'/game'} />
            <div className="container container-game container-centered" onClick={handleClick}>
                <div className="instruction-container">
                    <div className="instruction">Think</div>
                    <div className="instruction">you're a</div>
                    <div className="instruction red">trivia</div>
                    <div className="instruction red">whizz?</div>
                </div>
                
                <p className="sub-title">Then take the <b>TerraPay Trivia Quiz!</b></p>
                <p className="supporting-text">(Psst! We've got some exciting prizes to give away!)</p>
                <img src={hat} alt="hat" className="hat-img" />
            </div>
        </>
    )
    
    
}

export default Instructions;
