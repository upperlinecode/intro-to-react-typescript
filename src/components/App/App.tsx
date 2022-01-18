import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Banner";
import AnimalCard from "../AnimalCard";
import { fetchAnimals } from "./mock-api";
import "./App.css";

const App = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // OPTION 1: Async
    retrieveAnimals();

    // OPTION 2: .then()
    // fetchAnimals().then((animals) => setAnimals(animals));
  }, []);

  const retrieveAnimals = async () => {
    const animals = await fetchAnimals();
    setAnimals(animals);
  };

  return (
    <div className="App">
      <Banner />
      <div className="animalWrapper">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animalData={animal} />
        ))}
      </div>
    </div>
  );
};

export default App;
