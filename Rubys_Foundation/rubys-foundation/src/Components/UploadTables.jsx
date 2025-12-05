import React from 'react';
import { createAnimals, createDogs, getDogs } from '../Services/ServicesSpecies';
import {  getCats } from '../Services/ServicesSpecies';
import { getCountries, createCountry } from '../Services/ServicesCountriesData';
import { getStates, createState, getStatesLocal, getStatesByCountry } from '../Services/ServicesStatesData';
import { getsCitiesyByState } from '../Services/ServicesCitiesData';
import { getCountriesLocal, getCountry } from '../Services/ServicesCountriesData';
import { createCityLocal } from '../Services/ServicesCitiesData';
import { createMediaBreed } from '../Services/ServicesMediaBreeds';
async function uploadAnimals() {
  try {
        
        const dogs = await getDogs();

        for (const dog of dogs) {
            const newDog = {
                name: dog.name,
                specieBreed: 2
            }

            const dogLocal = await createDogs(newDog);
            
            const newMediaBreed = {
                imageUrl: dog.image.url,
                breed: dogLocal.id

            }

            const mediaBreed = await createMediaBreed(newMediaBreed);
            console.log("breed image creada ", mediaBreed)
        }
        
        const catsApi = await getCats();
        console.log(catsApi)
        for (const catApi of catsApi) {
            const newCat = {
                name: catApi.name,
                specieBreed: 1
            }
            
            const catLocal = await createAnimals(newCat);

            if (catApi.image && catApi.image.url) {
                const newMediaBreed = {
                    imageUrl: catApi.image.url,
                    breed: catLocal.id
                };
                const mediaBreed = await createMediaBreed(newMediaBreed);
                console.log("breed image creada ", mediaBreed);
            }

            

        }
        
        
        
        const countryApi = await getCountry("CR");
        const newCountry = {
            name: countryApi.name,
            iso2: countryApi.iso2
        }

        const country = await createCountry(newCountry);
        console.log("Country local: ", country)
        
        
        const statesApi = await getStatesByCountry("CR")

        for (const stateApi of statesApi){
            const newState = {
                name:stateApi.name,
                iso2Country: "CR",
                iso2State: stateApi.iso2
            }
            const state = await createState(newState); 
            console.log("state subido: ", state)
        }
        
        
        console.log("Entro ")
        const statesLocal = await getStatesLocal(); 
        
        for (const state of statesLocal) {
            const cities = await getsCitiesyByState(state.iso2Country, state.iso2State);

            for (const city of cities) {
                    const newCity = {
                    name: city.name,
                    iso2State: state.iso2State,
                    latitude: city.latitude,
                    longitude: city.longitude     
                };

                const createdCity = await createCityLocal(newCity);
                console.log("Ciudad creada:", createdCity);
            }
        }
        
        
        console.log("Perros, gatos y paises cargados en las tablas:", newDogs, newCats, country, state, city);
        
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