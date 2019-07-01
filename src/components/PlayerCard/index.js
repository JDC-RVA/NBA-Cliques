import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Team:</strong> {props.team}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlayerCard;
