import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./gearup.css";
import LoadingCube from "../assets/LoadingCube/LoadingCube";

function GearupPage() {
    const navigate = useNavigate();
    
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
          navigate("/currency");
        }, 3000);
        return () => clearTimeout(loadingTimeout);
    }, []);

    

    return (
        <div className="container">
            <LoadingCube className="loader"/>
            <h1 className="title">Put your game face on and</h1>
            <h1 className="sub-title">gear up</h1>
            <h1 className="title">for the currency challenge!</h1>
        </div>
    );
}

export default GearupPage;
