import React from "react";
import "./style.css";

const Title = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <h3 className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </h3>
  </div>
);

export default Title;
