import React from 'react';
export const GAME_MODE = {
    EASY: "easy",
    ADVANCED: "advanced"
}
const GameModeContext = React.createContext(null);  // Create our context       
export default GameModeContext;
