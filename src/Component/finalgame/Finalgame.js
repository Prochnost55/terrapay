import React, { useContext } from "react";
import { Link } from "react-router-dom";
import check from "../assets/check.png";
import "./finalgame.css";
import { TOTAL_ALLOWED_ATTEMPTS } from "../../utils/constant";
import UserContext from "../../context/userContext";

function Finalgame(props) {
    const { user } = useContext(UserContext);

    return (
        <div className="container not-covered-container">
            <div className="image-check">
                <img src={check} alt="check" className="check-img" />
                <div className="text">
                    <h1 className="right-text">You're right!</h1>
                    <p className="para-text">We're on our way to cover this currency!</p>
                </div>
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

export default Finalgame;
