import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Banner";
import AnimalCard from "../AnimalCard";
import { fetchAnimals } from "../../utils/mock-api";
import "./App.css";
import { AnimalData } from "../../utils/types";

const App = () => {
  const [animals, setAnimals] = useState<AnimalData[]>([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/62fa38735c146d63ca6f76b7"
      );
      console.log(response);
      const animalsFromTheAPI = await response.json();
      console.log(animalsFromTheAPI);
      setAnimals(animalsFromTheAPI.record);
    };

    makeAPICall();
  }, []);

  return (
    <div className="App">
      <Banner />
      <div className="animalWrapper">
        {animals.map((animal) => (
          <AnimalCard data={animal} />
        ))}
      </div>
    </div>
  );
};

export default App;
