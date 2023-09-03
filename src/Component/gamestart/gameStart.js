import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import currencies from "../currencydetails/currencies.json";
import './gamestart.css';
import UserContext from "../../context/userContext";
import { updateUserInDB } from "../../utils/client";
import { TOTAL_ALLOWED_ATTEMPTS } from "../../utils/constant";


function CurrencyDetailsPage() {
    const { currencyId } = useParams();
    const [currency, setCurrency] = React.useState(null);
    const { user, setUser } = useContext(UserContext);
    const [supportedCountries, setSupportedCountries] = React.useState([]);

    const navigate = useNavigate();

    React.useEffect(() => {
        const selectedCurrency = currencies.find((c) => c.index == currencyId);
        const contries = currencies.filter((data) => data.currency.indexOf(selectedCurrency.currency) != -1);
        setSupportedCountries(contries);
        setCurrency(selectedCurrency);
        updateUser(selectedCurrency);
        if(selectedCurrency.isSupported === -1){
            navigate("/notCovered");
        }
    }, [currencyId])

    const updateUser = (selectedCurrency) => {
        if(!user.email) return;
        const updatedUserData = {
            ...user,
            selectedCurrency: user.selectedCurrency ? [
                ...user.selectedCurrency,
                selectedCurrency
            ] : [selectedCurrency]
        }
        setUser(updatedUserData);
        updateUserInDB(updatedUserData);
    }

    if (!currency) {
        return <div>Currency not found</div>;
    }

    const getSupportedCountries = () => {
        if(supportedCountries.length == 1){
            return currency.country;
        }

        if(supportedCountries.length == 2){
            return `${supportedCountries[0].country} & ${supportedCountries[1].country}`
        };

        return `${supportedCountries[0].country}, ${supportedCountries[1].country} & ${supportedCountries.length - 2} others`
    }

    return (
        <div className="container game-result-container">
            <div className="container-covered glassmorphism">
                <div className="info-box">
                    <div className="currency">
                        {currency.currency}
                    </div>
                    <div className="info">
                        We've got it covered!
                    </div>
                </div>

                <div className="row">
                    <div>
                        <div className="label">
                            {supportedCountries.length == 1 ? "Country" : "Countries"} 
                        </div>
                        <div className="value">
                            {getSupportedCountries()}
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Receive coverage
                        </div>
                        <div className="value">
                            {currency.coverage}
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            Penetration coverage
                        </div>
                        <div className="value">
                            {currency.penetration}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div>
                        <div className="label">
                            Delivery time
                        </div>
                        <div className="value">
                            {currency.deliveryETA}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                {TOTAL_ALLOWED_ATTEMPTS - user.gameCount > 0 ?
                    <div className="attempts-info">
                        You have got <span style={{ color: "#4572E0" }}>{TOTAL_ALLOWED_ATTEMPTS - user.gameCount} more attempts</span> left
                    </div>
                    : null
                }
                <div>
                    {TOTAL_ALLOWED_ATTEMPTS - user.gameCount > 0 ? <Link to={"/form"}>
                        <button className="btn">Try again</button>
                    </Link> : null}
                    
                    <Link to={"/thankyou"}>
                        <button className="btn">Find out more from our experts</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CurrencyDetailsPage;
