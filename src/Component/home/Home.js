import React from "react";
import { Link } from "react-router-dom";
import Ques from "../Assets/questionmark.png";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <img src={Ques} alt="quesmark" className="ques-img" />
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
  );
}

export default Home;
