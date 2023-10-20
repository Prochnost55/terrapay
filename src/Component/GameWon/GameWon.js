import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import check from "../Assets/check.png";
import "./gamewon.css";
import { TOTAL_ALLOWED_ATTEMPTS } from "../../utils/constant";
import UserContext from "../../context/userContext";
import GameModeContext, { GAME_MODE } from "../../context/gameContext";
import questions from "../GamePage/questions";

function GameWon(props) {
    const { gameMode } = useContext(GameModeContext);
    return gameWonScreen[gameMode]();
}


const gameWonScreen = {
    [GAME_MODE.EASY]: () => {
        const { user, setUser } = useContext(UserContext);
        const { index: questionIdx } = useParams();
        const question = questions[questionIdx];

        useEffect(() => {
            setUser({
                ...user,
                triviaGameCount: user.triviaGameCount+1
            })
        }, [])
        return (
            <div className="container not-covered-container container-centered">
                <img src={check} alt="check" className="check-img" />
                <div className="text">
                    <h1 className="right-text">You've got that right!</h1>
                    <p className="para-text">{question?.prompt}</p>
                </div>
                
                <div>
                    {TOTAL_ALLOWED_ATTEMPTS - user.triviaGameCount > 0 ? <Link to={"/form"}>
                        <button className="btn btn-orange">Next Question</button>
                    </Link> : null}
                    <Link to={"/thankyou"}>
                        <button className="btn">Find out more from our experts</button>
                    </Link>
                </div>
            </div>
        );
    },
    [GAME_MODE.ADVANCED]: () => {
        const { user } = useContext(UserContext);
        return (
            <div className="container not-covered-container container-centered">
                <img src={check} alt="check" className="check-img" />
                <div className="text">
                    <h1 className="right-text">You're right!</h1>
                    <p className="para-text">We're on our way to cover this currency!​</p>
                </div>
                
                <div>
                    {TOTAL_ALLOWED_ATTEMPTS - user.gameCount > 0 ? <Link to={"/form"}>
                        <button className="btn">Play again</button>
                    </Link> : null}
                    <Link to={"/thankyou"}>
                        <button className="btn">Find out more from our experts</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default GameWon;
