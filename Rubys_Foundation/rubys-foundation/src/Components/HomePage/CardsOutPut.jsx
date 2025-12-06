import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

  const dialogOptions = useRef(null);
  const dialogFullInformation = useRef(null);

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


  


  
  /*
  construir el funcionamiento de los reportes

  const report = {
    problem: problem,
    userDescription: userDescription,

    moderatorDescription: "",
    adminDescription: "",

  
    reportGrade: 1,  esto en default ya que es un reporte hecho por un usuario 
    // se puede quedar uno de los 2 vacios en reprotedPublication y reportedUser, porque se puede reportar a una publication o a un usuario 
    reportedPublication: id de la publicacion reportada 
    reportedUser: id del usuario reportado,
    reporterUser: id del usuario que reporto,
    moderator: id del moderador que acepto el report del usuario 
    administrator> id del administrador que aprobo el report aceptado por el moderador 

    dateReport: Date.now(),
  }


  de un select de problemas que son comunes en reportes se tomara uno, el que el suer condicere mas aproximado al reporte 
  luego se le pediraw una descripcion al usuario, userDescription

  las descriptions de moderator y admin quedan en blanco porque aun no interactuan con ese report ninguno de ellos
  date report es la fecha de creacion de ese report 

  report grade es al grado del report, por defecto esta 1 porque es un report hecho por un usuario 
  y el reported user el cual es el usuario reportado 

  
  */


  return (
    <div id="cardsContainer">
        {pets.filter(pet => pet.status === "Adopcion").map((pet) => {
          const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
          const mediaPet = mediaPets.find(mediaPet => mediaPet.pet === pet.id);
          const breed = breeds.find(b => b.id === pet.breed);
          const city = cities.find(c => c.id === Number(currentUser.city));
          const publication = publications.find(publication => publication.pet === pet.id);
          {console.table(publication)}
          return (
                
              <div key={pet.id} className="cards">
                <dialog ref={dialogFullInformation} id='fullInformationDialog'>
                  <h4>{pet.name}</h4>
                  <p> breed: {breed ? breed.name : "without breed"}</p>
                  {mediaPet && <img id="imgModalFullInformation" src={mediaPet.imagen} alt={pet.name}  />} 
                  <p>{city ? city.name : "without city "}   {/*realizar funcion que mida la distancia con la latitude y la longitude de city*/ }</p>
                  <p>age - {pet.age}</p>
                  <h2>Description:</h2>
                  <p>{publication?.description ?? "Sin descripción disponible"}</p>
                  <button onClick={closeModalFullInformation}>X</button>
                </dialog>
                <div id="imageContainer">
                  {mediaPet && <img src={mediaPet.imagen} alt={pet.name} width="150" />} 
                  <button onClick={openModalOptions}>⋮</button>
                  <dialog ref={dialogOptions} id='optionDialog'>
                    <Link to="/Report" state={{  }} ><button >Report</button></Link>
                    <Link to="/Help"><button >Help</button></Link>
                    <button onClick={closeModalOptions}>X</button>
                  </dialog>
                </div>
                <div id="nameContainer"><h4>{pet.name}</h4> <img src={breed?.specieBreed === 1? "../../../public/images/PostPage/cat_button.png" : "../../../public/images/PostPage/dog_button.png"} alt={breed?.specieBreed === 1 ? "Gato" : "Perro"}/> </div>
                <p>{breed ? breed.name : "without breed"} - {pet.age}</p>
                <p>{city ? city.name : "without city "}   {/*realizar funcion que mida la distancia con la latitude y la longitude de city*/ }</p>
                <p>Vaccinated: {pet.vaccinated ?? "sin dato"}</p>
                <div id="btnContainer"><button onClick={openModalFullInformationPet}>see more</button><button onClick={contact}>Contact</button></div>
                  
              </div>
          );
        })}



    </div>
  );
}

export default CardsOutPut;