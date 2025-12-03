import React, { useState } from 'react'
import { getPets } from '../../Services/ServicesPets'
import { getPublications } from '../../Services/ServicesPublications'
import { getMediaPets } from '../../Services/ServicesMediaPets'
import { getCats } from '../../Services/ServicesSpecies'
import { getDogs } from '../../Services/ServicesSpecies'
function CardsOutPut() {
    const [publications, setPublications] = useState([])
    const [pets, setPets] = useState([])
    const [mediaPets, setMediaPets] = useState([])
    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    
    async function getPublication() {

        const dogs = await getDogs();
        const cats = await getCats();
        setDogs(dogs)
        setCats(cats)
        
        const pets = await getPets();
        const mediaPets = await getMediaPets();
        const publications = await getPublications();


        setPublications(publications)
        setMediaPets(mediaPets)
        setPets(pets)
        console.log(dogs)
        console.log(cats)
        console.log(pets)
        console.log(mediaPets)
        console.log(publications)
    }


  return (
    <div id="cardsContainer">
        
        {pets.map((pet) => (
            <div key={pet.id}>
                {pet.name}<br/>
                
                {currentUser.city} 2.5km<br/>
                {pet.vaccinated}
            </div>

        ))}
        
        <button onClick={getPublication}>get publication</button>
    </div>
  )
}

export default CardsOutPut