import animalData from "./sample_animal_data";

export const fetchAnimals = (text?: string) => {
  return Promise.resolve(animalData);
};
