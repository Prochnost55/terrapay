import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { getUserFromDB } from "../../utils/client";
import UserContext, { EMPTY_USER, TRIVIA_GAME_RESULT } from "../../context/userContext";
import { TOTAL_ALLOWED_ATTEMPTS } from "../../utils/constant";
import ParticlesComponent from "../Particles/ParticlesComponent";
import { BUBBLES } from "../../utils/particlePresets";
import GameModeContext, { GAME_MODE } from '../../context/gameContext';

function FormPage() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const {gameMode} = useContext(GameModeContext);
    const [error, setError] = useState("");
    const [data, setData] = useState(EMPTY_USER);

    React.useEffect(() => {
        if (user.email) {
            updateUser(user).then(() => {
                navigate("/gearupPage");
            });
        }
    }, [user])

    const handleInputChange = (event) => {
        setError("");
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async () => {
        if (
            data.firstName === "" ||
            data.lastName === "" ||
            data.email === ""
        ) {
            setError("Please fill in all required fields with valid data.");
        } else {
            if (!validateEmail(data.email)) {
                setError("Please enter a valid email.");
                return;
            }

            setError("");
            updateUser(data).then(() => {
                navigate("/gearupPage")
            }).catch(e => {
                if (e.message != "ATTEMPTS_EXHAUSTED") {
                    console.log(e);
                }
            });

        }
    };

    const updateUserForAdvanced = async (data) => {
        let userFromDB = await getUserFromDB(data.email);
        if (userFromDB) {
            let totalAttemptsAvailed = userFromDB['gameCount'];
            if (totalAttemptsAvailed >= TOTAL_ALLOWED_ATTEMPTS) {
                navigate('/end-game');
                throw new Error('ATTEMPTS_EXHAUSTED');
            }
            userFromDB['gameCount'] += 1;
        } else {
            userFromDB = data;
            userFromDB['gameCount'] += 1;
        }
        setUser(userFromDB);
    }

    const updateUserForEasy = async (data) => {
        let userFromDB = await getUserFromDB(data.email);
        if (userFromDB) {
            let totalAttemptsAvailed = userFromDB.triviaGameStat.attempts;
            if (userFromDB.triviaGameStat.result === TRIVIA_GAME_RESULT.WON){
                navigate('/thankyou');
                throw new Error('GAME_WON');
            }
            if (totalAttemptsAvailed >= TOTAL_ALLOWED_ATTEMPTS) {
                navigate('/end-game');
                throw new Error('ATTEMPTS_EXHAUSTED');
            }
        } else {
            userFromDB = data;
        }
        setUser(userFromDB);
    }

    const updateUser = (data) => {
       if(gameMode === GAME_MODE.ADVANCED){
            return updateUserForAdvanced(data);
        } else {
            return updateUserForEasy(data);
        }
    }
    return (
        <>
            <div className="container form-container">
                <div className="form">
                    {/* <div className="form-header">
                        <h1 className="form-title">Fill in your details and</h1>
                        <h2 className="form-subtitle">let's find out!</h2>
                    </div> */}
                    <div className="form-header">
                        <div>A few quick details before</div>
                        <div>you get started!</div>
                    </div>
                    <div className="row">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name*"
                            value={data.firstName}
                            onChange={handleInputChange}
                            autoComplete="off"
                            autoFocus
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name*"
                            className="last-name"
                            value={data.lastName}
                            onChange={handleInputChange}
                            autoComplete="off"
                            
                        />
                    </div>
                    <div className="row">
                        <input
                            type="email"
                            name="email"
                            className="email"
                            placeholder="Business Email*"
                            value={data.email}
                            onChange={handleInputChange}
                            autoComplete="off"
                            
                        />
                        <input
                            type="tel"
                            name="mobileNo"
                            placeholder="Mobile no (optional)"
                            value={data.mobileNo}
                            onChange={handleInputChange}
                            autoComplete="off"
                            
                        />                   
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button className="submit-button" onClick={handleSubmit}>
                        I'm ready to begin!
                    </button>
                </div>
            </div>
            <ParticlesComponent
                particlePreset={BUBBLES}
            />
        </>
    );
}

export default FormPage;
