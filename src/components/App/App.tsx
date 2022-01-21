import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Banner";
import AnimalCard from "../AnimalCard";
import { fetchAnimals } from "./mock-api";
import "./App.css";

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
