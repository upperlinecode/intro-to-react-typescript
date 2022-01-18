import React from "react";
import { useState } from "react";
import "./AnimalCard.css";

interface Animal {
  name: string;
  animal: string;
  city: string;
  breed: string;
  images: string[];
  majors: string[];
  minors: string[];
  quote: string[];
}

const AnimalCard = (props: { animalData: Animal }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [isFrozen, setIsFrozen] = useState(false);

  const handleVote = () => {
    if (!isFrozen) {
      setVoteCount(voteCount + 1);
    }
  };

  const { name, animal, city, breed, majors, minors, quote, images } =
    props.animalData;

  return (
    <div className="AnimalCard">
      <div className="imageContainer">
        <img src={images[0] || "https://via.placeholder.com/150"} />
      </div>
      <div className="cardBody">
        <h2>{name}</h2>
        <h5>
          {animal} - {breed} - {city}
        </h5>
        <p>Major(s): {majors}</p>
        <p>Minor(s): {minors}</p>
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
          <button
            className="freeze"
            onClick={() => {
              setIsFrozen(!isFrozen);
            }}
          >
            {isFrozen ? "Unfreeze Voting" : "Freeze Voting"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
