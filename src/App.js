import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/home/Home";
import FormPage from "./Component/formpage/FormPage";
import GearupPage from "./Component/gearup/gearupPage";
import Currency from "./Component/currency/Currency";
import CurrencyDetails from "./Component/currencydetails/CurrencyDetails";
import GameStart from "./Component/gamestart/gameStart";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
