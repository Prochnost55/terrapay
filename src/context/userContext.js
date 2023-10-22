import React from 'react';
export const TRIVIA_GAME_RESULT = {
    WON: 1,
    LOST: 0,
}

export const EMPTY_USER = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gameCount: 0,
    triviaGameStat: {
        attempts: 0,
        result: TRIVIA_GAME_RESULT.LOST
    },
    selectedCurrency: []
}


const UserContext = React.createContext({
    user: EMPTY_USER,
    setUser: () => { }

});  // Create our context       
export default UserContext;
