import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Banner";
import AnimalCard from "../AnimalCard";
import { fetchAnimals } from "../../utils/mock-api";
import "./App.css";
import { AnimalData } from "../../utils/types";


const App = () => {
  return (
    <div className="App">
      <Banner />
      <div className="animalWrapper">
        <AnimalCard />
      </div>
    </div>
  );
};

export default App;
