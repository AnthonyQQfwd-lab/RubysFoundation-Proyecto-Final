import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getPets } from '../../Services/ServicesPets'
import { getMediaPets } from '../../Services/ServicesMediaPets'
import { getPublications } from '../../Services/ServicesPublications'
import { getAnimals } from '../../Services/ServicesSpecies'
import { getsCitiesLocal } from '../../Services/ServicesCitiesData'
import { getUsers } from '../../Services/ServicesUsers'

import '../../Styles/HomePage/HomePage.css'
import GoTOProfileBtn from '../GoTOProfileBtn'

function CardsOutPut({ publicationsType }) {
  const location = useLocation()
  const { id: profileId } = useParams()

  const currentPath = location.pathname
  const isHomePage = currentPath === '/Home'
  const isProfilePage = currentPath.startsWith('/profile')

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 })

  const [pet, setPet] = useState({})
  const [breed, setBreed] = useState({})
  const [keeper, setKeeper] = useState({})
  const [mediaPet, setMediaPet] = useState({})
  const [keeperCity, setKeeperCity] = useState({})
  const [publication, setPublication] = useState({})
  const [distance, setDistance] = useState('')

  const [pets, setPets] = useState([])
  const [mediaPets, setMediaPets] = useState([])
  const [publications, setPublications] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [cities, setCities] = useState([])
  const [breeds, setBreeds] = useState([])

  const dialogOptions = useRef(null)
  const dialogFullInformation = useRef(null)

  useEffect(() => {
    async function getData() {
      setPets(await getPets())
      setMediaPets(await getMediaPets())
      setPublications(await getPublications())
      setBreeds(await getAnimals())
      setCities(await getsCitiesLocal())
      setUsers(await getUsers())
      setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser')))
    }
    getData()
  }, [])

  function contact() {
    console.log('contact')
  }

  function toRad(coordinate) {
    return coordinate * Math.PI / 180
  }

  function calculatedDistances(lat1, lat2, lon1, lon2) {
    const R = 6371
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c

    if (distance === 0) return 'At the same city'
    if (distance < 1) return `${(distance * 1000).toFixed(0)} meters`
    return `${distance.toFixed(1)} km`
  }

  const openOptionsMenu = (event, publication) => {
    const rect = event.target.getBoundingClientRect()
    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.right + window.scrollX - 150
    })
    setPublication(publication)
    setMenuOpen(true)
  }

  return (
    <div>
      {menuOpen && (
        <div
          className="optionsMenu"
          style={{ top: menuPosition.top, left: menuPosition.left }}
        >
          <Link to="/Report" state={{ publication }}>
            <button>Report publication</button>
          </Link>
          <Link to="/Help">
            <button>Help</button>
          </Link>
          <button onClick={() => setMenuOpen(false)}>X</button>
        </div>
      )}

      <dialog ref={dialogFullInformation}>
        <h4>{pet.name} {pet.age} year/s</h4>
        <p>{breed?.name ?? 'without breed'}</p>
        {mediaPet && <img src={mediaPet.imagen} alt={pet.name} />}
        <p>{keeperCity?.name ?? 'without city'} - {distance}</p>
        <p>{publication?.description}</p>
        <p>Keeper: {keeper.firstName}</p>
        <GoTOProfileBtn user={keeper} />
        <button onClick={() => dialogFullInformation.current.close()}>X</button>
      </dialog>

      <div id="cardsContainer">
        {pets.filter(p => p.status === publicationsType).map(pet => {
          if (!currentUser?.id) return null

          const anotherUser = users.find(u => u.id === pet.keeper)
          if (!anotherUser || anotherUser.isBanned) return null

          const publication = publications.find(p => p.pet === pet.id)
          if (!publication || publication.isHidden) return null

          const isMyPublication = anotherUser.id === Number(currentUser.id)
          const isMyProfile = isProfilePage && Number(profileId) === Number(currentUser.id)
          const isOtherProfile = isProfilePage && Number(profileId) !== Number(currentUser.id)

          if (isHomePage && isMyPublication) return null
          if (isMyProfile && !isMyPublication) return null
          if (isOtherProfile && anotherUser.id !== Number(profileId)) return null

          const mediaPet = mediaPets.find(m => m.pet === pet.id)
          const breed = breeds.find(b => b.id === pet.breed)
          const userCity = cities.find(c => c.id === Number(currentUser.city))
          const anotherCity = cities.find(c => c.id === Number(anotherUser.city))

          let distance = ''
          if (userCity && anotherCity) {
            distance = calculatedDistances(
              userCity.latitude,
              anotherCity.latitude,
              userCity.longitude,
              anotherCity.longitude
            )
          }

          return (
            <div key={pet.id} className="cards">
              <div id="imageContainer">
                {mediaPet && <img src={mediaPet.imagen} alt={pet.name} />}
                {!isMyPublication && (
                  <button
                    className="optionsBtn"
                    onClick={e => openOptionsMenu(e, publication)}
                  >
                    ⋮
                  </button>
                )}
              </div>

              <h4>{pet.name}</h4>
              <p>{breed?.name} - {pet.age}</p>
              <p>{anotherCity?.name} - {distance}</p>

              <button
                onClick={() => {
                  dialogFullInformation.current.showModal()
                  setPet(pet)
                  setBreed(breed)
                  setMediaPet(mediaPet)
                  setPublication(publication)
                  setKeeperCity(anotherCity)
                  setKeeper(anotherUser)
                  setDistance(distance)
                }}
              >
                see more
              </button>

              {!isMyProfile && (
                <button onClick={contact}>Contact</button>
              )}

              {isMyProfile && (
                <div className='editDeletebtnsContainer'>
                  <Link to="/EditPublication" state={{ publication }}><button>Edit Publication</button></Link>
                  <button>Delete Publication</button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardsOutPut
