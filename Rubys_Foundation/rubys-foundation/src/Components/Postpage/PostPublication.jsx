import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Servicios para manejo de mascotas y publicaciones
import { createPets } from '../../Services/ServicesPets';
import { createPublications } from '../../Services/ServicesPublications';
import { getAnimals } from '../../Services/ServicesSpecies';
import { getMediaBreeds } from '../../Services/ServicesMediaBreeds';

import '../../Styles/PostPage/PostPage.css';

function PostPublication({publication}) {
  if(publication){
    console.log(publication)
  }
  // Estados para información de la mascota
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState({});
  const [breedId, setBreedId] = useState('');
  const [specie, setSpecie] = useState('');
  const [isVaccinated, setIsVaccinated] = useState('');
  const [status, setStatus] = useState("Unknown");
  
  // Estados para información de la publicación
  const [reward, setReward] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  
  // Estados para datos de razas
  const [breeds, setBreeds] = useState([]);
  const [mediaBreeds, setMediaBreeds] = useState([]);
  
  // Referencia para el modal
  const dialogRef = useRef(null);

  /**
   * Maneja el cambio del estado de la mascota (Adopción, Perdido, Buscado)
   */
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  /**
   * Maneja el cambio del estado de vacunación
   */
  const handleChangeVaccinated = (event) => {
    setIsVaccinated(event.target.value);
  };

  /**
   * Efecto que carga las razas filtradas según la especie seleccionada
   * Se ejecuta cada vez que cambia la especie (Cat o Dog)
   */
  useEffect(() => {
    async function loadBreedsBySpecie() {
      // Cargar imágenes de las razas
      const mediaAnimals = await getMediaBreeds();
      setMediaBreeds(mediaAnimals);
      
      // Filtrar razas según la especie seleccionada
      if (specie === 'Cat') {
        const animals = await getAnimals();
        const catBreeds = animals.filter(animal => animal.specieBreed === 1);
        setBreeds(catBreeds);
      } else if (specie === 'Dog') {
        const animals = await getAnimals();
        const dogBreeds = animals.filter(animal => animal.specieBreed === 2);
        setBreeds(dogBreeds);
      }
    }
    
    if (specie) {
      loadBreedsBySpecie();
    }
  }, [specie]);

  /**
   * Abre el modal para seleccionar la raza de la mascota
   */
  const openModalBreeds = () => {
    if (breeds.length > 0) {
      dialogRef.current.showModal();
    }
  };

  /**
   * Cierra el modal de selección de razas
   */
  const closeModalBreeds = () => {
    dialogRef.current.close();
  };

  /**
   * Sube la imagen de la mascota al servidor
   * @param {number} petId - ID de la mascota creada
   * @returns {Promise<string>} URL de la imagen subida
   */
  const uploadPetImage = async (petId) => {
        if (!image) return null;

        const formData = new FormData();
        formData.append('pet', petId);
        formData.append('imagen', image);

        try {
          const response = await axios.post(
              'http://127.0.0.1:8000/api/mediaPets/',
              formData,
              {
              headers: { 'Content-Type': 'multipart/form-data' },
              }
          );
          console.log('Imagen subida:', response.data);
          return response.data.imagen;
        } catch (err) {
        console.error('Error subiendo imagen:', err);
        return null;
        }
    };
    
  /**
   * Crea una nueva publicación con toda la información de la mascota
   * Proceso:
   * 1. Crea el registro de la mascota en la base de datos
   * 2. Sube la imagen de la mascota
   * 3. Crea la publicación asociada a la mascota
   */
  const postPublication = async () => {
    try {
      // Obtener usuario actual desde sessionStorage
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

      // 1. Crear registro de la mascota
      const newPet = {
        name: name,
        age: age,
        vaccinated: isVaccinated || 'unknown',
        isActive: true,
        status: status,
        keeper: currentUser.id,
        breed: breedId || 1,
      };

      const pet = await createPets(newPet);
      console.log('Mascota creada:', pet);

      // 2. Subir imagen de la mascota
      await uploadPetImage(pet.id);

      // 3. Crear publicación
      const today = new Date().toISOString().split('T')[0];
      const newPublication = {
        description: description,
        reward: reward,
        datePublications: today,
        pet: pet.id,
      };

      const publication = await createPublications(newPublication);
      console.log('Publicación creada:', publication);

      // Aquí podrías agregar navegación o mensaje de éxito
      alert('¡Publicación creada exitosamente!');
      
    } catch (error) {
      console.error('Error al crear publicación:', error);
      alert('Error al crear la publicación. Por favor intenta de nuevo.');
    }
  };

  return (
    <div>
      {/* Modal para selección de raza */}
      <dialog ref={dialogRef} id="modalBreeds">
        <div id="containerModal">
          {/* Opción de raza mixta */}
          <div>
            <img
              src="https://st2.depositphotos.com/1606449/6724/i/950/depositphotos_67248691-stock-photo-adult-mixed-breed-dog-and.jpg"
              alt="Mixed breed"
              width="200"
              onClick={() => {
                setBreedId(0);
                setBreed({ name: 'Mixed breed' });
                closeModalBreeds();
              }}
            />
            <p>Mixed breed</p>
          </div>

          {/* Lista de razas disponibles */}
          {breeds.map((breed) => {
            const media = mediaBreeds.find((m) => m.breed === breed.id);

            return (
              <div
                key={breed.id}
                style={{ marginBottom: '10px', cursor: 'pointer' }}
                onClick={() => {
                  setBreedId(breed.id);
                  setBreed(breed);
                  closeModalBreeds();
                }}
              >
                {media ? (
                  <img src={media.imageUrl} alt={breed.name} width="200" />
                ) : (
                  <p>No image available</p>
                )}
                <p>{breed.name}</p>
              </div>
            );
          })}
        </div>
      </dialog>

      {/* Formulario de publicación */}
      <select name="status" id="status" value={status} onChange={handleChangeStatus}>
        <option value="">Selecciona una opción</option>
        <option value="Adopcion">Mascota en adopción</option>
        <option value="Lost">Mascota perdida</option>
        <option value="Wanted">Mascota buscada</option>
      </select>
      <br />

      <label htmlFor="name">Nombre</label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label htmlFor="image">Elige una foto o video:</label>
      <br />
      <br />
      <input
        type="file"
        id="image"
        onChange={(e) => setImage(e.target.files[0])}
        accept="image/*,video/*"
      />
      <br />

      <label htmlFor="age">Edad</label>
      <br />
      <input
        type="number"
        id="age"
        value={age}
        placeholder="Edad"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />

      <button id="btnCat" onClick={() => setSpecie('Cat')}>
        <img src="../../../public/images/PostPage/cat_button.png" width="200" alt="Gato" />
      </button>
      <button id="btnDog" onClick={() => setSpecie('Dog')}>
        <img src="../../../public/images/PostPage/dog_button.png" width="200" alt="Perro" />
      </button>
      <br />

      <button onClick={openModalBreeds} disabled={!specie}>
        Seleccionar raza
      </button>
      {breed.name && <p>Raza seleccionada: {breed.name}</p>}
      <br />

      <select
        name="vaccinated"
        id="vaccinated"
        value={isVaccinated}
        onChange={handleChangeVaccinated}
      >
        <option value="">¿Está vacunada?</option>
        <option value="no">No</option>
        <option value="i dont know">No lo sé</option>
        <option value="some">Algunas</option>
        <option value="Yes">Sí</option>
      </select>
      <br />

      <label htmlFor="reward">¿Recompensa?</label>
      <br />
      <input
        type="number"
        id="reward"
        value={reward}
        placeholder="Recompensa"
        onChange={(e) => setReward(e.target.value)}
      />
      <br />

      <label htmlFor="description">Descripción</label>
      <br />
      <input
        type="text"
        id="description"
        value={description}
        placeholder="Descripción"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <button onClick={postPublication}>Crear publicación</button>
    </div>
  );
}

export default PostPublication;