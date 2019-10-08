import React from "react";
import "./App.css";

function TopRow(props) {
  return (
    <>
      <div className="topRow">
        <div className="home">
          <h2 className="home__name" id="home-s">
            Lions
          </h2>
          <div className="home__score">{props.homeState}</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{props.awayState}</div>
        </div>
      </div>
    </>
  );
}

export default TopRow;
