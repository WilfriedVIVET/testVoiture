import React from "react";
import "../style/card.css";

const Card = ({ props }) => {
  return (
    <div className="card">
      <span>Marque: {props.marque} </span>
      <br />
      <span>Nom: {props.name} </span>
      <br />
      <span>Couleur: {props.color} </span>
    </div>
  );
};

export default Card;
