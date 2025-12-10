import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getPets } from '../../Services/ServicesPets';
import { getMediaPets } from '../../Services/ServicesMediaPets';
import { getPublications } from '../../Services/ServicesPublications';
import { getAnimals } from '../../Services/ServicesSpecies';
import { getCountriesLocal } from '../../Services/ServicesCountriesData';
import { getStatesLocal } from '../../Services/ServicesStatesData';
import { getsCitiesLocal } from '../../Services/ServicesCitiesData';

import { getUsers } from '../../Services/ServicesUsers';

import '../../Styles/HomePage/HomePage.css';


function CardsOutPut({publicationsType}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  //datos para cargar y enseñarlo a la hora de consultar la informacion completa de la pet
  const [pet, setPet] = useState({})
  const [breed, setBreed] = useState({})
  const [keeper, setKeeper] = useState({})
  const [mediaPet, setMediaPet] = useState({})
  const [keeperCity, setKeeperCity] = useState({})
  const [publication, setPublication] = useState({})
  const [distance, setDistance]= useState("")


  const [pets, setPets] = useState([]);
  const [mediaPets, setMediaPets] = useState([]);
  const [publications, setPublications] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const [cities, setCities] = useState([]);
  const [currentUserCity, setCityCurrentUserCity] = useState({})
  const [breeds, setBreeds] = useState([]);

  const dialogOptions = useRef(null);
  const dialogFullInformation = useRef(null);

  useEffect(() => {
    async function getData() {
      const petsData = await getPets();
      console.log(pets)
      setPets(petsData);
      const mediaData = await getMediaPets();
      setMediaPets(mediaData);
      const publicationsData = await getPublications();
      setPublications(publicationsData);
      const breeds = await getAnimals();
      setBreeds(breeds)
      const cities = await getsCitiesLocal();
      setCities(cities)
      const users = await getUsers();
      setUsers(users)
      const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
      setCurrentUser(currentUser)
    }
    getData();
  }, []);

  

  function contact() {
    //este btn abrira otro modal el cual el dara la opcion de mandar un mensaje al otro usuario creando asi con chat con el o directamentea brir el chat 
    console.log("funciona el btn contact")
  }

  const openModalFullInformationPet = () => {
    
    dialogFullInformation.current.showModal();
    
  };

  const closeModalFullInformation = () => {
    dialogFullInformation.current.close();
  };

   /**
   * Abre el modal para seleccionar la raza de la mascota
   */
  const openModalOptions = () => {
    dialogOptions.current.showModal();
    
  };


  /**
   * Cierra el modal de selección de razas
   */
  const closeModalOptions = () => {
    dialogOptions.current.close();
  };

  function toRad(coordinate){
    return coordinate * Math.PI / 180;
  }
  
  function calculatedDistances(lat1, lat2, lon1, lon2) {
    const R = 6371; 

    const lat1Rad = toRad(lat1);
    const lat2Rad = toRad(lat2);
    const lon1Rad = toRad(lon1);
    const lon2Rad = toRad(lon2);

    const dLat = lat2Rad - lat1Rad;   
    const dLon = lon2Rad - lon1Rad;  

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    distance.toFixed(1)

    if(distance === 0.0){
      return "At the same city"
    }
    else if(distance < 1){
      return distance.toFixed(1) * 1000 + " meters"
    }
    else if( distance > 1 ){
      return distance.toFixed(1) + " km"
    }

  }


  const openOptionsMenu = (event, publication) => {
    const rect = event.target.getBoundingClientRect(); 

    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.right + window.scrollX - 150 
    });

    setPublication(publication);            
    setMenuOpen(true);


    setMenuOpen(true);
  };

  const closeMenu = () => setMenuOpen(false);


  return (
    <div>

      {menuOpen && (
        <div
          className="optionsMenu"
          style={{
            top: menuPosition.top,
            left: menuPosition.left
          }}
        >
          <Link to="/Report" state={{ publication }}><button onClick={() => { closeMenu();  }}>Report publication</button></Link>
          <Link to="/Help" state={{  }} ><button onClick={() => { closeMenu(); }}>Help</button></Link>
          <button onClick={closeMenu}>X</button>
        </div>
      )}
      <dialog ref={dialogFullInformation} id='fullInformationDialog'>

        <h4>{pet.name} {pet.age} year/s</h4>
        <p>{breed ? breed.name : "without breed"}</p>
        {mediaPet && <img id="imgModalFullInformation" src={mediaPet.imagen} alt={pet.name}  />} 
        <p>{keeperCity ? keeperCity.name : "without city"} - {distance} {/*realizar funcion que mida la distancia con la latitude y la longitude de city */}</p>

        <h2>Description:</h2>
        <p>{publication?.description ?? "Sin descripción disponible"}</p>
        <p>Keeper: {keeper.firstName}</p>
        <button onClick={closeModalFullInformation}>X</button>
      </dialog>

      <dialog ref={dialogOptions} id='optionsDialog'>
        <Link to="/Report" state={{ currentUser, keeper,  }} ><button >Report</button></Link>
        <Link to="/Help"><button >Help</button></Link>
        <button onClick={closeModalOptions}>X</button>
      </dialog>


      {/*------------------------------------------ */}
      <div id="cardsContainer">

      
        {pets.filter(pet => pet.status === publicationsType).map((pet) => { 
          const userCity = cities.find(city => city.id === Number(currentUser.city)); 
          const anotherUser = users.find(user => user.id === pet.keeper);
          if (!anotherUser) return null;

          const mediaPet = mediaPets.find(mediaPet => mediaPet.pet === pet.id);
          const breed = breeds.find(breeds => breeds.id === pet.breed);
          const publication = publications.find(publication => publication.pet === pet.id);
          const anotherCity = anotherUser?.city ? cities.find(city => city.id === Number(anotherUser.city)) : null;

          let distance = null;
          if (userCity && anotherCity && userCity.latitude && userCity.longitude && anotherCity.latitude && anotherCity.longitude) {
            distance = calculatedDistances(userCity.latitude, anotherCity.latitude, userCity.longitude, anotherCity.longitude);
          }

          return (  
            
            <div key={pet.id} className="cards">
              <div id="imageContainer">
                {mediaPet && <img src={mediaPet.imagen} alt={pet.name} width="150" />} 
                {pet.keeper !== Number(currentUser.id) ? (
                  <button
                    className="optionsBtn"
                    onClick={(e) => openOptionsMenu(e, publication)}
                  >
                    ⋮
                  </button>
                ) : null}
              </div>
              <div id="nameContainer">
                <h4>{pet.name}</h4> 
                <img src={breed?.specieBreed === 1 ? "../../../public/images/PostPage/cat_button.png" : "../../../public/images/PostPage/dog_button.png"} alt={breed?.specieBreed === 1 ? "Gato" : "Perro"} />
              </div>
              <p>{breed ? breed.name : "without breed"} - {pet.age}</p>
              <p>{anotherCity ? anotherCity.name : "without city"} - {distance}</p>
              <p>Vaccinated: {pet.vaccinated ?? "sin dato"}</p>
              <div id="btnContainer">
                <button onClick={() => { 
                  openModalFullInformationPet();  
                  setPet(pet); 
                  setBreed(breed); 
                  setMediaPet(mediaPet); 
                  setPublication(publication); 
                  setKeeperCity(anotherCity); 
                  setKeeper(anotherUser)
                  setDistance(distance)
                }}>see more</button>
                <button onClick={contact}>Contact</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardsOutPut;