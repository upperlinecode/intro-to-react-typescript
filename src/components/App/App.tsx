import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Banner";
import AnimalCard from "../AnimalCard";
import { fetchAnimals } from "../../utils/mock-api";
import "./App.css";
import { AnimalData } from "../../utils/types";

const capitalize = (word: string) =>
  word.slice(0, 1).toUpperCase() + word.slice(1);

const App = () => {
  const [animals, setAnimals] = useState<AnimalData[]>([]);
  useEffect(() => {
    fetchAnimals().then((nextAnimals) => setAnimals(nextAnimals));
  }, []);

  return (
    <div className="App">
      <Banner />
      <div className="animalWrapper">
        {animals.map((animal) => (
          <AnimalCard
            animal={capitalize(animal.animal)}
            breed={animal.breed}
            city={animal.city}
            imageSrc={animal.images[0]}
            key={animal.id}
            major={animal.majors.join(", ")}
            minor={animal.minors.join(", ")}
            name={animal.name}
            quote={animal.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
