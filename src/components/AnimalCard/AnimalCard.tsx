import React from "react";
import "./AnimalCard.css";

const AnimalCard = () => {
  return (
    <div className="AnimalCard">
      <div className="imageContainer">
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="cardBody">
        <h2>Sparky</h2>
        <h5>Dog - Corgi - Poughkeepsie</h5>
        <p>Major: Molecular Biology</p>
        <p>Minor: Political Science</p>
        <p>"Eat, Pray, Love" - Elizabeth Gilbert</p>
        <div className="votes">
          <span>Current Votes: 12</span>
        </div>
        <div className="buttons">
          <button className="vote">Vote for Sparky</button>
          <button className="freeze">Freeze Voting</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
