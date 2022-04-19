import React from "react";
import "./AnimalCard.css";

interface AnimalCardProps {
  animal: string;
  breed: string;
  city: string;
  imageSrc: string;
  major: string;
  minor: string;
  name: string;
  quote: string;
}

const AnimalCard = ({
  animal,
  breed,
  city,
  imageSrc,
  major,
  minor,
  name,
  quote,
}: AnimalCardProps) => {
  const [voteCount, setVoteCount] = React.useState(0);
  const [isFrozen, setIsFrozen] = React.useState(false);

  return (
    <div className="AnimalCard">
      <div className="imageContainer">
        <img src={imageSrc} />
      </div>
      <div className="cardBody">
        <h2>{name}</h2>
        <h5>
          {animal} - {breed} - {city}
        </h5>
        <p>Major: {major}</p>
        <p>Minor: {minor}</p>
        <p className="quote">{quote}</p>
        <div className="votes">
          <span>Current Votes: {voteCount}</span>
        </div>
        <div className="buttons">
          {!isFrozen && (
            <button
              className="vote"
              onClick={() => setVoteCount((prevCount) => prevCount + 1)}
            >
              Vote for {name}
            </button>
          )}
          <button
            className="freeze"
            onClick={() => setIsFrozen((prev) => !prev)}
          >
            {isFrozen ? "Unfreeze" : "Freeze"} Voting
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
