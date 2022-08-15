import React, { useState } from "react";
import { AnimalData } from "../../utils/types";
import "./AnimalCard.css";

const AnimalCard = ({ data }: { data: AnimalData }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [isFrozen, setIsFrozen] = useState(false);
  const {
    name,
    animal,
    city,
    state,
    description,
    breed,
    images,
    majors,
    minors,
    quote,
  } = data;

  const handleVote = () => {
    if (!isFrozen) {
      setVoteCount(voteCount + 1);
    }
  };
  const handleFreeze = () => {
    setIsFrozen(!isFrozen);
  };

  return (
    <div className="AnimalCard">
      <div className="imageContainer">
        <img src={images[0]} alt={name + "'s headshot"} />
      </div>
      <div className="cardBody">
        <h2>{name}</h2>
        <h5>
          {animal} - {breed} - {city}, {state}
        </h5>
        <p>Major: {majors.join(", ")}</p>
        <p>Minor: {minors.join(", ")}</p>
        <p className="quote">{quote}</p>
        <div className="votes">
          <span>Current Votes: {voteCount}</span>
        </div>
        <div className="buttons">
          {!isFrozen && (
            <button className="vote" onClick={handleVote}>
              Vote for {name}
            </button>
          )}
          <button className="freeze" onClick={handleFreeze}>
            {isFrozen ? "Unfreeze" : "Freeze"} Voting
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
