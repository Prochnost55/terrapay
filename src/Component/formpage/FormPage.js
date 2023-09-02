import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { TerraPayLogo } from "../assets/svgs";
import { getUserFromDB, saveDataToDB, updateUserInDB } from "../../utils/client";
import UserContext, {EMPTY_USER} from "../../context/userContext";
import { TOTAL_ALLOWED_ATTEMPTS } from "../../utils/constant";

function FormPage() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const [error, setError] = useState("");
    const [data, setData] = useState(EMPTY_USER);

    React.useEffect(() => {
        if(user.email){
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
            if(!validateEmail(data.email)){
                setError("Please enter a valid email.");
                return;
            }

            setError("");
            updateUser(data).then(() => {
                navigate("/gearupPage")
            }).catch(e => {
                if(e.message != "ATTEMPTS_EXHAUSTED"){
                    console.log(e);
                }
            });
            
        }
    };

    const updateUser = async (data) => {
        let userFromDB = await getUserFromDB(data.email);
        if(userFromDB){
            if(userFromDB.gameCount >= TOTAL_ALLOWED_ATTEMPTS){
                navigate('/thankyou');
                throw new Error('ATTEMPTS_EXHAUSTED');
            }
            userFromDB.gameCount += 1;
            await updateUserInDB(userFromDB)
        } else {
            userFromDB = data;
            userFromDB.gameCount += 1;
            await saveDataToDB(userFromDB)
        }   
        setUser(userFromDB);
    }
    return (
        <div className="container form-container">
            <TerraPayLogo className='terrapay-logo' />
            <div className="form">
                <div className="form-header">
                    <h1 className="form-title">Fill in your details and</h1>
                    <h2 className="form-subtitle">let's find out!</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name*"
                            value={data.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name*"
                            className="last-name"
                            value={data.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="email"
                            name="email"
                            className="email"
                            placeholder="Business Email*"
                            value={data.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="tel"
                            name="mobileNo"
                            placeholder="Mobile no (optional)"
                            value={data.mobileNo}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button className="submit-button" onClick={handleSubmit}>
                    I'm ready to begin!
                </button>
            </div>
        </div>
    );
}

export default FormPage;
