import React from "react";
import { Link } from "react-router-dom";
import currencies from "./currencies.json";
import "./gamepage.css";
import GameModeContext, { GAME_MODE } from "../../context/gameContext";
import questions from "./questions";

function GamePage(props) {
    const { gameMode } = React.useContext(GameModeContext);
    return games[gameMode]()
}



const EasyGame = (props) => {
    const questionIdx = Math.round(Math.random()*10);
    const question = questions[questionIdx];

    
    return (
        <div className="container container-centered">
            <div className="question">
                <div className="sub-heading">
                    {question.question}
                </div>
            </div>
            <div className="btn-container">
                <Link to={`/${question?.correctAnswer === true ? "game-won" : "game-lost"}/${questionIdx}`}>
                    <button
                        className="btn btn-blue"
                    >
                        True
                    </button>
                </Link>
                <Link to={`/${question?.correctAnswer === false ? "game-won" : "game-lost"}/${questionIdx}`}>
                    <button
                        className="btn btn-orange"
                    >
                        False
                    </button>
                </Link>
            </div>
        </div>
    )
}
const AdvancedGame = (props) => {
    const [currencyList, setCurrencyList] = React.useState([]);
    const [data, setData] = React.useState(currencies);

    React.useEffect(() => {
        setData(data.filter(each => each.label != ""));
    }, [])

    React.useEffect(() => {
        processCurrencies();
    }, [data])

    const processCurrencies = () => {
        const chunkSize = 6;
        const temp = [];
        for (let i = 0; i < data.length; i += chunkSize) {
            let chunk = data.slice(i, i + chunkSize);
            chunk = [...chunk, ...chunk, ...chunk];
            let marqueeClass = i % (chunkSize*2) == 0 ? "track track-fwd" : "track track-rev";

            chunk = chunk.map((currency, index) => {
                if(!currency.label) return;
                return (
                    <span key={`${i}-${index}`} className="currency-link">
                        <Link
                            key={`${currency.label}-${i}-${index}`}
                            to={`/game-lost/${currency.index}`}
                        >
                            {currency.label}
                        </Link>
                    </span>
                )
            })
            
            temp.push(
                <div className={marqueeClass} key={`marquee-${i}`}>
                    <div className="content">
                        {chunk}
                    </div>
                </div>
            )
        }

        setCurrencyList(temp);
    }
    return (
        <div className="container currencyPage marquee">
            {currencyList}
        </div>
    );
}

const games = {
    [GAME_MODE.EASY]: EasyGame,
    [GAME_MODE.ADVANCED]: AdvancedGame
}
export default GamePage;
