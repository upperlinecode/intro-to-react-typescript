import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Banner";
import AnimalCard from "../AnimalCard";
import { fetchAnimals } from "./mock-api";
import "./App.css";

const App = () => {
  useEffect(() => {
    // OPTION 1: Async
    setAnimals();

    // OPTION 2: .then()
    // fetchAnimals().then((animals) => console.log(animals));
  }, []);

  const setAnimals = async () => {
    const animals = await fetchAnimals();
    console.log(animals);
  };

  return (
    <div className="App">
      <Banner />
      <AnimalCard />
    </div>
  );
};

export default App;
