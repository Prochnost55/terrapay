import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./gearup.css";

function GearupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(true);
      navigate("/currency");
    }, 3000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Put your game face on and</h1>
      <h1 className="sub-title">gear up</h1>
      <h1 className="title">for the currency challenge!</h1>
      {isLoading && <p className="loading">Loading...</p>}
    </div>
  );
}

export default GearupPage;
