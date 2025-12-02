import React from 'react';
import { createDogs, getDogs } from '../Services/ServicesSpecies';
import { createCats, getCats } from '../Services/ServicesSpecies';
async function uploadAnimals() {
  try {
        const dogs = await getDogs();

        const newDogs = await Promise.all(
            dogs.map(dog => {
                const newDog = {
                    name: dog.name,
                    specieBreed: 2
                };
                return createDogs(newDog);
            })
        );

        const cats = await getCats();
        const newCats = await Promise.all(
            cats.map(cat => {
                const newCat = {
                    name: cat.name,
                    specieBreed: 1
                };
                return createCats(newCat);
            })
        );

        console.log("Perros y fatos cargados en las tablas:", newDogs, newCats);
    } catch (error) {
        console.error("Error al cargar los animales:", error);
    }
}




function UploadTables() {
  return (
    <div>
      <button onClick={uploadAnimals}>Cargar animales</button>
    </div>
  );
}

export default UploadTables;