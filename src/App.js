import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import FormPage from "./Component/FormPage/FormPage";
import GearupPage from "./Component/gearup/gearupPage";
import Instructions from "./Component/Instructions/Instructions";
import GamePage from "./Component/GamePage/GamePage";
import GameLost from "./Component/GameLost/GameLost";
import FinalPage from './Component/GameWon/GameWon';
import ThankYou from './Component/thankyou/ThankYou';
import UserContext, { EMPTY_USER } from "./context/userContext";
import GameModeContext, { GAME_MODE } from "./context/gameContext";
import GameWon from "./Component/GameWon/GameWon";

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
