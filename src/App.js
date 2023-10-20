import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import FormPage from "./component/FormPage/FormPage";
import GearupPage from "./component/gearup/gearupPage";
import Instructions from "./component/Instructions/Instructions";
import GamePage from "./component/GamePage/GamePage";
import GameLost from "./component/GameLost/GameLost";
import FinalPage from './component/GameWon/GameWon';
import ThankYou from './component/thankyou/ThankYou';
import UserContext, { EMPTY_USER } from "./context/userContext";
import GameModeContext, { GAME_MODE } from "./context/gameContext";
import GameWon from "./component/GameWon/GameWon";

function App() {
    const [user, setUser] = React.useState(EMPTY_USER);
    const [gameMode, setGameMode] = React.useState(GAME_MODE.EASY);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <GameModeContext.Provider value={{ gameMode, setGameMode }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/form" element={<FormPage />} />
                        <Route path="/gearupPage" element={<GearupPage />} />
                        <Route path="/instructions" element={<Instructions />} />
                        <Route path="/game" element={<GamePage />} />
                        <Route path="/game-lost/:currencyId" element={<GameLost />} />
                        <Route path="/finalpage" element={<FinalPage />} />
                        <Route path="/thankyou" element={<ThankYou />} />
                        <Route path="/game-won" element={<GameWon />} />
                        <Route path="/game-won/:index" element={<GameWon />} />
                    </Routes>
                </BrowserRouter>
            </GameModeContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
