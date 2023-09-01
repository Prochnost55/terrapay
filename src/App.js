import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/home/Home";
import FormPage from "./Component/formpage/FormPage";
import GearupPage from "./Component/gearup/gearupPage";
import Currency from "./Component/currency/Currency";
import CurrencyDetails from "./Component/currencydetails/CurrencyDetails";
import GameStart from "./Component/gamestart/gameStart";
import FinalPage from './Component/finalgame/Finalgame';
import ThankYou from './Component/thankyou/ThankYou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/gearupPage" element={<GearupPage />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/details" element={<CurrencyDetails />} />
        <Route path="/reAgain/:currencyId" element={<GameStart />} />
        <Route path="/finalpage" element={<FinalPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
