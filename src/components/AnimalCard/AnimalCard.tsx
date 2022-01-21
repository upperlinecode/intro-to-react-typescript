import React from "react";
import "./AnimalCard.css";

const AnimalCard = () => {
  const name = "Sparky";
  const voteCount = 12;

  return (
    <div className="AnimalCard">
      <div className="imageContainer">
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="cardBody">
        <h2>{name}</h2>
        <h5>Dog - Corgi - Poughkeepsie</h5>
        <p>Major: Molecular Biology</p>
        <p>Minor: Political Science</p>
        <p className="quote">"Eat, Pray, Love" - Elizabeth Gilbert</p>
        <div className="votes">
          <span>Current Votes: {voteCount}</span>
        </div>
        <div className="buttons">
          <button className="vote">Vote for NAME</button>
          <button className="freeze">Freeze Voting</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
