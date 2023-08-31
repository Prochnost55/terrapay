import React from "react";
import { Link } from "react-router-dom";

function Finalgame() {
  return (
    <div>
      <h1>You're right!</h1>
      <p>We're on our way to cover this currency!</p>
      <Link to={"/form"}>
        <button>Play again</button>
      </Link>
      <button>Find out more from our experts</button>
    </div>
  );
}

export default Finalgame;
