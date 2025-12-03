import React from 'react';
import { createDogs, getDogs } from '../Services/ServicesSpecies';
import { createCats, getCats } from '../Services/ServicesSpecies';
import { getCountries, createCountry } from '../Services/ServicesCountriesData';
import { getStates, createState, getStatesLocal } from '../Services/ServicesStatesData';
import { getsCitiesyByState } from '../Services/ServicesCitiesData';
import { getCountriesLocal } from '../Services/ServicesCountriesData';
import { createCityLocal } from '../Services/ServicesCitiesData';
async function uploadAnimals() {
  try {
        /*
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

        const countries = await getCountries();
        const newCountries = await Promise.all(
            countries.map(country => {
                const newCountry = {
                    name: country.name,
                    iso2: country.iso2
                };
                return createCountry(newCountry);
            })
        );
        
        console.log("entro")
        
        

        const states = await getStates();
        console.log(states)
        for (const state of states) {
            const newState = {
                name: state.name,
                iso2Country: state.country_code,
                iso2State: state.iso2
            }; 
            await createState(newState);  
        }
        console.log("ultimo estado subido: ", newState)

        */
        console.log("Entro ")
        const statesLocal = await getStatesLocal(); 
        
        for (const state of statesLocal) {
            const cities = await getsCitiesyByState(state.iso2Country, state.iso2State);

            for (const city of cities) {
                    const newCity = {
                    name: city.name,
                    iso2State: state.iso2State,
                    iso2Country: state.iso2Country,
                    latitude: city.latitude,
                    longitude: city.longitude     
                };

                const createdCity = await createCityLocal(newCity);
                console.log("Ciudad creada:", createdCity);
            }
        }
        

        console.log("Perros, gatos y paises cargados en las tablas:", newDogs, newCats, newCountries);
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