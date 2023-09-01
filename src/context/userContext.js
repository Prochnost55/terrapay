import React from 'react';
export const EMPTY_USER = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gameCount: 0,
    selectedCurrency: []
}
const UserContext = React.createContext({
    user: EMPTY_USER,
    setUser: () => { }

});  // Create our context       
export default UserContext;
