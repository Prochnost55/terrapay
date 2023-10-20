import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import QuestionMark from "../assets/quesMark.png"
import { QuestionMark } from "../assets/svgs";
import "./home.css";
import ParticlesComponent from "../Particles/ParticlesComponent";
import { BUBBLES } from "../../utils/particlePresets";
import GameModeContext, { GAME_MODE } from "../../context/gameContext";
function Home(props) {
    const {setGameMode} = useContext(GameModeContext);

    const handleClick = (gameMode) => {
        setGameMode(gameMode);
    };

    return (
        <>
            <div className="container home-container container-centered">
                <div className="heading">
                    <div>
                        Feeling
                    </div>
                    <div>
                        Lucky?
                    </div>
                </div>
                <div className="sub-heading">
                    Then we've got just the thing for you!
                </div>
                <div className="sub-heading">
                    Just pick a challenge.
                </div>
                <div className="btn-container">
                    <Link to="form">
                        <button 
                            className="btn btn-blue"
                            onClick={() => handleClick(GAME_MODE.EASY)}
                        >
                            Easy
                        </button>
                    </Link>
                    <Link to="form">
                        <button 
                            className="btn btn-orange"
                            onClick={() => handleClick(GAME_MODE.ADVANCED)}
                        >
                            Advanced
                        </button>
                    </Link>
                </div>
            </div>
            <ParticlesComponent 
                particlePreset={BUBBLES}
            />
        </>
    );
}

export default Home;
