import React from "react";
import { Link } from "react-router-dom";
import currencies from "./currencies.json";
import "./currency.css";

function CurrencyList(props) {
    const [currencyList, setCurrencyList] = React.useState([]);
    const [data, setData] = React.useState(currencies);

    React.useEffect(() => {
        setData(data.filter(each => each.label != ""));
    }, [])

    React.useEffect(() => {
        processCurrencies();
    }, [data])

    const processCurrencies = () => {
        const chunkSize = 5;
        const temp = [];
        for (let i = 0; i < data.length; i += chunkSize) {
            let chunk = data.slice(i, i + chunkSize);
            let marqueeClass = i % 20 == 0 ? "track track-fwd" : "track track-rev";

            chunk = chunk.map((currency, index) => {
                if(!currency.label) return;
                return (
                    <span key={`${i}-${index}`}>
                        <Link
                            key={currency.label}
                            to={`/reAgain/${currency.index}`}
                            className="currency-link"
                        >
                            {currency.label}
                        </Link>
                    </span>
                )
            })
            chunk = [
                ...chunk,
                ...chunk,
                ...chunk,
                ...chunk,
            ];
            
            temp.push(
                <div className={marqueeClass} key={`marquee-${i}`}>
                    <div className="content">
                        {chunk}
                    </div>
                </div>
            )
        }

        setCurrencyList(temp);
    }
    return (
        <div className="container currencyPage marquee">
            {currencyList}
        </div>
    );
}

export default CurrencyList;
