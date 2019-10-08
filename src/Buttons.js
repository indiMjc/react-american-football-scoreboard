import React, { useState } from "react";
import "./App.css";

function Buttons() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const scores = [{ score: homeScore }, { score: awayScore }];
  // console.log(scores[0].score);
  // console.log(scores[1].score);

  return (
    <>
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAwayScore(awayScore + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </>
  );
}

export default Buttons;
