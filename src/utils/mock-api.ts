import animalData from "./sample_animal_data";

export const fetchAnimals = () => {
  return Promise.resolve(animalData);
};
