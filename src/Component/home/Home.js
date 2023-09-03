import React from "react";
import { Link } from "react-router-dom";
// import QuestionMark from "../assets/quesMark.png"
import { QuestionMark } from "../assets/svgs";
import "./home.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { BUBBLES } from '../../utils/particlePresets';

function Home() {
    const particlesInit = async (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
        // starting from v2 you can add only the features you need reducing the bundle size 
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
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
            <Particles
                id="tsparticles-home"
                init={particlesInit}
                loaded={particlesLoaded}
                options={BUBBLES}
            />
        </>
    );
}

export default Home;
