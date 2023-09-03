import React from "react";
import { Link } from "react-router-dom";
// import QuestionMark from "../assets/quesMark.png"
import { QuestionMark } from "../assets/svgs";
import "./home.css";
import ParticlesComponent from "../Particles/ParticlesComponent";
import { BUBBLES } from "../../utils/particlePresets";
function Home() {
    return (
        <>
            <div className="container home-container">
                <div className="img-container" >
                    <QuestionMark className="ques-img" />
                </div>

                <h1 className="heading"> Are you good at guesing games? </h1>
                <div>
                    <Link to="form">
                        <button className="btn">Yes!</button>
                    </Link>
                    <Link to="form">
                        <button className="btn">I guess so</button>
                    </Link>
                </div>
            </div>
            <ParticlesComponent 
                particlePreset={BUBBLES}
            />
        </>
    );
}

export default Home;
