import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import { createPets } from '../../Services/ServicesPets'
import { createPublications } from '../../Services/ServicesPublications'
import { getAnimals } from '../../Services/ServicesSpecies'
import { getMediaBreeds } from '../../Services/ServicesMediaBreeds'

import '../../Styles/PostPage/PostPage.css'

function PostPublication() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState({})
  const [breedId, setBreedId] = useState('')
  const [specie, setSpecie] = useState('')
  const [isVaccinated, setIsVaccinated] = useState('')
  const [status, setStatus] = useState('')

  const [reward, setReward] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const [breeds, setBreeds] = useState([])
  const [mediaBreeds, setMediaBreeds] = useState([])

  const dialogRef = useRef(null)

  const handleChangeStatus = (e) => {
    const value = e.target.value
    setStatus(value)

    if (value === 'Adopcion') {
      setReward('')
    }
  }

  const handleChangeVaccinated = (e) => setIsVaccinated(e.target.value)

  useEffect(() => {
    async function loadBreeds() {
      const media = await getMediaBreeds()
      setMediaBreeds(media)

      const animals = await getAnimals()

      if (specie === 'Cat') {
        setBreeds(animals.filter(a => a.specieBreed === 1))
      }

      if (specie === 'Dog') {
        setBreeds(animals.filter(a => a.specieBreed === 2))
      }
    }

    if (specie) loadBreeds()
  }, [specie])

  const openModalBreeds = () => breeds.length && dialogRef.current.showModal()
  const closeModalBreeds = () => dialogRef.current.close()

  const uploadPetImage = async (petId) => {
    if (!image) return

    const formData = new FormData()
    formData.append('pet', petId)
    formData.append('imagen', image)

    await axios.post('http://127.0.0.1:8000/api/mediaPets/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }

  const postPublication = async () => {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))

    const newPet = {
      name,
      age,
      vaccinated: isVaccinated || 'unknown',
      isActive: true,
      status,
      keeper: currentUser.id,
      breed: breedId || 1
    }

    const pet = await createPets(newPet)

    await uploadPetImage(pet.id)

    const today = new Date().toISOString().split('T')[0]

    const newPublication = {
      description,
      reward: status === 'Lost' || status === 'Wanted' ? reward : null,
      datePublications: today,
      pet: pet.id
    }

    await createPublications(newPublication)

    alert('Post successfully created')
  }

  return (
    <div id="postPublicationContainer">

      <dialog ref={dialogRef} id="modalBreeds">
        <div id="containerModal">

          <div onClick={() => {
            setBreedId(0)
            setBreed({ name: 'Mixed breed' })
            closeModalBreeds()
          }}>
            <img src="https://st2.depositphotos.com/1606449/6724/i/950/depositphotos_67248691-stock-photo-adult-mixed-breed-dog-and.jpg" />
            <p>Mixed breed</p>
          </div>

          {breeds.map(b => {
            const media = mediaBreeds.find(m => m.breed === b.id)
            return (
              <div key={b.id} onClick={() => {
                setBreedId(b.id)
                setBreed(b)
                closeModalBreeds()
              }}>
                {media ? <img src={media.imageUrl} /> : <p>No image</p>}
                <p>{b.name}</p>
              </div>
            )
          })}

        </div>
      </dialog>

      <div className="postCard">

        <h2 className="postTitle">Publication</h2>

        <select className="input" value={status} onChange={handleChangeStatus}>
          <option value="">Select an option</option>
          <option value="Adopcion">pet in adoption</option>
          <option value="Lost">lost pet</option>
          <option value="Wanted">pet wanted</option>
        </select>

        <input className="input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <label className="fileLabel">
          Upload image
          <input type="file" hidden accept="image/*,video/*" onChange={e => setImage(e.target.files[0])} />
        </label>

        <input className="input" type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />

        <div className="speciesButtons">
          <button onClick={() => setSpecie('Cat')}>
            <img src="/images/PostPage/cat_button.png" />
          </button>
          <button onClick={() => setSpecie('Dog')}>
            <img src="/images/PostPage/dog_button.png" />
          </button>
        </div>

        <button className="secondaryBtn" onClick={openModalBreeds} disabled={!specie}>
          select a breed
        </button>

        {breed.name && <p className="selected">Breed: {breed.name}</p>}

        <select className="input" value={isVaccinated} onChange={handleChangeVaccinated}>
          <option value="">is it vaccinated??</option>
          <option value="no">No</option>
          <option value="i dont know">i dont know</option>
          <option value="some">some</option>
          <option value="Yes">yes</option>
        </select>

        {(status === 'Lost' || status === 'Wanted') && (
          <input
            className="input"
            type="number"
            placeholder="Recompensa"
            value={reward}
            onChange={e => setReward(e.target.value)}
          />
        )}

        <textarea className="input textarea" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />

        <button className="primaryBtn" onClick={postPublication}>
          Make publication
        </button>

      </div>
    </div>
  )
}

export default PostPublication
