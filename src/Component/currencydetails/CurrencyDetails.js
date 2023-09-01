import React from "react";
import { Link } from "react-router-dom";
import currencies from "./currencies.json";
import "./currency.css";

function CurrencyList(props) {

    return (
        <div className="currencyPage">
            {currencies.map((currency, index) => {
                if(!currency.label) return;

                return (
                    <Link
                        key={currency.label}
                        to={`/reAgain/${currency.index}`}
                        className="currency-link"
                    >
                        {currency.label}
                    </Link>
                )
            }
            )}
        </div>
    );
}

export default CurrencyList;
