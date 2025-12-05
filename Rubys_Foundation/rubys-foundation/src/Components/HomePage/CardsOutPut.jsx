import React, { useState, useEffect } from 'react';
import { getPets } from '../../Services/ServicesPets';
import { getMediaPets } from '../../Services/ServicesMediaPets';
import { getPublications } from '../../Services/ServicesPublications';
import { getAnimals } from '../../Services/ServicesSpecies';
import { getCountriesLocal } from '../../Services/ServicesCountriesData';
import { getStatesLocal } from '../../Services/ServicesStatesData';
import { getsCitiesLocal } from '../../Services/ServicesCitiesData';
import '../../Styles/HomePage/HomePage.css';


function CardsOutPut() {
  const [pets, setPets] = useState([]);
  const [mediaPets, setMediaPets] = useState([]);
  const [publications, setPublications] = useState([]);

  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({})

  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    async function getData() {
      const petsData = await getPets();
      setPets(petsData);
      const mediaData = await getMediaPets();
      setMediaPets(mediaData);
      const publicationsData = await getPublications();
      setPublications(publicationsData);
      const breeds = await getAnimals();
      setBreeds(breeds)
      const cities = await getsCitiesLocal();
      setCities(cities)
      console.log(cities)
    }
    getData();
  }, []);

  function seeMore() {
    //este btn abrira un modal para mostrar  mucha mas informacion como el due;o y uan descripcion mas ddetallada 
    console.log('funciona btn see more')
  }

  function contact() {
    //este btn abrira otro modal el cual el dara la opcion de mandar un mensaje al otro usuario creando asi con chat con el o directamentea brir el chat 
    console.log("funciona el btn contact")
  }

  return (
    <div id="cardsContainer">
        {pets.filter(pet => pet.status === "Adopcion").map((pet) => {
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        const mediaPet = mediaPets.find(m => m.pet === pet.id);
        const breed = breeds.find(b => b.id === pet.breed);
        const city = cities.find(c => c.id === Number(currentUser.city));

        return (
            <div key={pet.id} className="cards">
                {mediaPet && <img src={mediaPet.imagen} alt={pet.name} width="150" />}
                <div id="nameContainer"><h4>{pet.name}</h4> <img src={breed?.specieBreed === 1? "../../../public/images/PostPage/cat_button.png" : "../../../public/images/PostPage/dog_button.png"} alt={breed?.specieBreed === 1 ? "Gato" : "Perro"}/> </div>
                <p>{breed ? breed.name : "without breed"} - {pet.age}</p>
                <p>{city ? city.name : "without city "}   {/*realizar funcion que mida la distancia con la latitude y la longitude de city*/ }</p>
                <p>Vaccinated: {pet.vaccinated ?? "sin dato"}</p>
                <div id="btnContainer"><button onClick={seeMore}>see more</button><button onClick={contact}>Contact</button></div>
                
            </div>
        );
        })}



    </div>
  );
}

export default CardsOutPut;