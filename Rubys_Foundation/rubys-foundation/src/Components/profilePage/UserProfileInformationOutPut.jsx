import React, {useState, useEffect} from 'react'
import { getPublicationsByPet } from '../../Services/ServicesPublications';
import { getCountryByUser } from '../../Services/ServicesCountriesData';
import { getCityByUser } from '../../Services/ServicesCitiesData';
import { getPetsByUser } from '../../Services/ServicesPets';
import '../../Styles/ProfilePage/ProfilePage.css';
import CardsOutPut from '../HomePage/CardsOutPut';

function UserProfileInformationOutPut({ user }) {

    const [pets, setPets] = useState([])
    const [petsPublications, setPetsPublications] = useState([])
    const [country, setCountry] = useState({})
    const [city, setCity] = useState({})

    useEffect(() => {
        async function getData() {
            if(user){
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
    <div id="profilePage">
        
        <div id="userProfileInformationContainer">
        <div className="profileHeader">
            <div className="avatar">
            {user.firstName[0]}
            </div>

            <div className="profileInfo">
            <h3>{user.firstName} {user.lastName}</h3>
            <p className="email">{user.email}</p>
            <p className="location">{country.name}, {city.name}</p>
            <p className="joined">Member since: {user.dateJoined}</p>
            </div>

            <button className="editProfileBtn" onClick={editUserProfile}>
            Edit profile
            </button>
        </div>
        </div>

        <div id="userStatisticsContainer">
        <div className="statisticsItems">
            <strong>{user.petsAdopted}</strong>
            <span>Pets adopted</span>
        </div>
        <div className="statisticsItems">
            <strong>{user.petsHelped}</strong>
            <span>Pets helped</span>
        </div>
        <div className="statisticsItems">
            <strong>{pets.length}</strong>
            <span>My pets</span>
        </div>
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
