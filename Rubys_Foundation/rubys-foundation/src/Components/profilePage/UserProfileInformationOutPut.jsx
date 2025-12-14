import React, {useState, useEffect} from 'react'
import { getPublicationsByPet } from '../../Services/ServicesPublications';
import { getCountryByUser } from '../../Services/ServicesCountriesData';
import { getCityByUser } from '../../Services/ServicesCitiesData';
import { getPetsByUser } from '../../Services/ServicesPets';

import CardsOutPut from '../HomePage/CardsOutPut';

function UserProfileInformationOutPut({ user }) {

    const [pets, setPets] = useState([])
    const [petsPublications, setPetsPublications] = useState([])
    const [country, setCountry] = useState({})
    const [city, setCity] = useState({})

    useEffect(() => {
        async function getData() {
            if(user){
                console.table(user)
                const pets = await getPetsByUser(user);
                setPets(pets)
                const petsPublications = []

                for (const pet of pets) {
                    const publications = await getPublicationsByPet(pet)
                    petsPublications.push(publications)
                }
                setPetsPublications(petsPublications)

                const country = await getCountryByUser(user)
                setCountry(country)

                const city = await getCityByUser(user)
                setCity(city)
                console.log(city)
            }
        }
        getData();
    }, []);

    async function editUserProfile() {
        
    }
        



  return (
    <div>
        <div id="userProfileInformationContainer">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>member since: {user.dateJoined}</p>
            <p>{user.email}</p>
            <p>{country.name}, {city.name}</p>
            <button onClick={editUserProfile}> Edit profile</button>
        </div>
        <div id="userStatisticsContainer">
            <div className='statisticsItems'>{user.petsAdopted}</div>
            <div className='statisticsItems'>{user.petsHelped}</div>
            <div className='statisticsItems'></div>
        </div>
        <div id="cardsOutPutContainer">
            <CardsOutPut publicationsType="Adopcion" />
            <CardsOutPut publicationsType="Lost" />
                    <CardsOutPut publicationsType="Wanted" />
        </div>
    </div>
  )
}

export default UserProfileInformationOutPut
