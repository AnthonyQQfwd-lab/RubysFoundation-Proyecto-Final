import React, {useEffect, useState} from 'react'
import { getPets, getPet } from '../../Services/ServicesPets'
import { getUser } from '../../Services/ServicesUsers'
import { getMediaPets } from '../../Services/ServicesMediaPets'

function CardsOutputReports({publication}) {
    const [mediaPet, setMediaPet] = useState({})
    const [pet, setPet] = useState({})
    const [keeper, setKeeper] = useState({})
    
    useEffect(() => {
        async function getData() {
            if(publication){
                const pet = await getPet(publication.pet);
                setPet(pet)
                const mediaPets = await getMediaPets()
                const mediaPet = mediaPets.find(mediaPet => mediaPet.pet === pet.id)
                setMediaPet(mediaPet)
                const keeper = await getUser(pet.keeper)
                setKeeper(keeper)
            }   
        }
        getData();
    }, [publication]);
    
  return (
    <div className='publicationContainers'>
        <h4>{pet.name}</h4>
        <div id="">
            {mediaPet && <img src={mediaPet.imagen} alt={pet.name} width="150" />}
        </div>
        <p>Reported User {keeper.firstName} {keeper.lastName}</p>
        {publication?.description}
    </div>
  )
}

export default CardsOutputReports