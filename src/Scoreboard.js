import React from "react";
import "./App.css";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function Scoreboard() {
  let childData = score => {
    const scores = score;
    return scores;
  };
  // console.log(scores);
  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow />
        <BottomRow />
      </section>
      <Buttons />
    </div>
  );
}

export default Scoreboard;
