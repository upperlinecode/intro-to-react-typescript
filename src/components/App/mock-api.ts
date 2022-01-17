import animalData from "../../sample_animal_data";

export type animalBio = {};

// We're simulating an API call by generating and resolving our own promise.

const waitAMoment = (x) => {
  return x;
};

export const fetchAnimals = () => {
  return Promise.resolve(animalData).then((x) => x);
};
