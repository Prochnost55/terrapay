import React from "react";
import { Link } from "react-router-dom";
import currencies from "./currencies.json";
import "./currency.css";

function CurrencyList() {
  return (
    <div className="currencyPage">
      {currencies.map((currency) => (
        <Link
          key={currency.id}
          to={`/reAgain/${currency.id}`}
          className="currency-link"
        >
          {currency.name}
        </Link>
      ))}
    </div>
  );
}

export default CurrencyList;
