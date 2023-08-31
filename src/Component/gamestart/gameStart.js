import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import currencies from "../currencydetails/currencies.json";

function CurrencyDetailsPage() {
  const { currencyId } = useParams();
  const currency = currencies.find((c) => c.id === currencyId);

  if (!currency) {
    return <div>Currency not found</div>;
  }

  return (
    <div className="container">
      <h1>{currency.name}</h1>
      <p>We've got it covered!</p>
      <div>
        <h3>Country</h3>
        <h3>Receive coverage</h3>
        <h3>Penetration coverage</h3>
        <h3>Delivery time</h3>
      </div>

      <Link to={"/form"}>
        <button>Try again</button>
      </Link>
      <button>Find out more from our experts</button>
    </div>
  );
}

export default CurrencyDetailsPage;
