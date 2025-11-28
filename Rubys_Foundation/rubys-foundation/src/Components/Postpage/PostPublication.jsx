import React, {useState, useEffect, useRef} from 'react'
//import del los services de pets para lamacenar la informacion de la pet en la tabla de pets 
import { getPets, createPets } from '../../Services/ServicesPets'
// importo de los services de media pets para lamacenar todos los archivo media de las pets 
import { getMediaPets, createMediaPets } from '../../Services/ServicesMediaPets'
//import de los ervices de publicactions para crear las publicaciones
import { getPublications, createPublications } from '../../Services/ServicesPublications'
import { getDogs } from '../../Services/ServicesSpecies'
import { getCats } from '../../Services/ServicesSpecies'
import '../../Styles/PostPage/PostPage.css'
function PostPublication() {




    const [name, setname] = useState("")
    const [age, setAge] = useState(0)
    const [breed, setBreed] = useState("")
    const [breedId, setBreedId] = useState("")
    const [specie, setSpecie] = useState("")
    const [isVaccinated, setIsVaccinated] = useState("")
    const [reward, setReward] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState()
    const dialogRef = useRef(null);

    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])
    const [breeds, setBreeds] = useState([])

    const handleChangeSpecie = (event) => {
        setSpecie(event.target.value);
    };

    const handleChangebreed = (event) => {
        setBreedId(event.target.value);
    };

    const handleChangeVaccinated = (event) => {
        setIsVaccinated(event.target.value);
    };

    useEffect(() => {
        async function getDog() {
            const dogs =await getDogs();
            setDogs(dogs)
        }
        getDog();
    }, []);

    useEffect(() => {
        async function getCat() {
            const cats =await getCats();
            setCats(cats )
        }
        getCat();
    }, []);

    useEffect(() => {
        function breedsBySpecie(){
            if(specie === "Cat"){
                console.log("Its a cat")
                setBreeds(cats)

            }
            else if(specie === "Dog"){
                console.log("its a dog")
                setBreeds(dogs)
            }
        }
        breedsBySpecie()
    }, [specie]);

    function seeBreedId(){
        console.log(breedId)
    }

    async function getCat(){
        const cats = await getCats()
        console.log(cats)
    }
    
    function openModalBreeds(){
        dialogRef.current.showModal();

    }

    function closeModalBreeds(){
        dialogRef.current.close();

    }

    async function postPublication() {
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        //se deben de hacer 3 post, 1 a la tabla de Pets, 2 a la tabla de publications y 3 a la tabla de media pets
        
        const newPet = {
            name: name,
            age: age,
            vaccinated: isVaccinated || "unknown",
            isActive: true,
            keeper: currentUser.id,
            breed: 1
        }

        const pet = await createPets(newPet)

        const newPublication = {
            description: description,
            reward: reward,
            datePublications: Date.now(),
            pet: pet.id
        }

        const publication = await createPublications()

        const newMediaPet = {
            //para tomar las imagenes habra que hacer un array para guardar varias y despues mapear para guardarlas 
            imagen: image,
            //posible adicion de video ( se tiene que planear )
            pet: pet.id
        }

        const mediaPet = await createMediaPets(newMediaPet)

        console.log(pet)
        console.log(publication)
        console.log(mediaPet)
    }

  return (
    <div>PostPublication
        <dialog ref={dialogRef} id="modalBreeds">
            <div id="containerModal">

            
                <div>
                    <img src="https://st2.depositphotos.com/1606449/6724/i/950/depositphotos_67248691-stock-photo-adult-mixed-breed-dog-and.jpg" alt={breed.name} width="200" onClick={() => {setBreedId(breed.id); dialogRef.current.close(); }} />
                    <p >Mixed breed</p>
                </div>
                {breeds.map((breed) => (
                    <div key={breed.id} style={{ marginBottom: "10px" }} onClick={() => {setBreedId(breed.id); dialogRef.current.close(); }}>
                        {breed.image && breed.image.url ? (
                            <img src={breed.image.url} alt={breed.name} width="200" />
                        ) : (
                            <p>No image available</p>
                        )}
                        <p>{breed.name}</p>
                    </div>
                ))}
            </div>
        </dialog>
        <label htmlFor="">Name</label><br/>
        <input type="text" value={name} placeholder='name' onChange={(e) => setname(e.target.value)} /><br/>
        <label>Choose a picture or video:</label><br/><br/>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <label >Age</label><br/>
        <input type="number" value={age}  placeholder='Age' onChange={(e) => setAge(e.target.value)}/><br/>
        <button id="btnCat" onClick={() => setSpecie("Cat")}><img src='../../../public/images/PostPage/cat_button.png'  width="200"  /></button>
        <button id="btnDog" onClick={() => setSpecie("Dog")}><img src='../../../public/images/PostPage/dog_button.png'  width="200" /></button><br/>
        <button onClick={openModalBreeds}>select a breed</button><br/>
        <select name="vaccinated" id="vaccinated" value={isVaccinated} onChange={handleChangeVaccinated}>
            <option value=" ">is it vaccinated?</option>
            <option value="no">No</option>
            <option value="i dont know">I dont know</option>
            <option value="some">some</option>
            <option value="Yes">Yes</option>
        </select><br/>
        <label htmlFor="">Reward?</label><br/>
        <input type="number" value={reward} placeholder='reward' onChange={(e) => setReward(e.target.value)} /><br/>
        <label htmlFor="">Description</label><br/>
        <input type="text" value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} /><br/>
        <button onClick={seeBreedId}>see id breed</button><br/>
        <button onClick={getCat}>see cats</button><br/>
        <button onClick={postPublication}>Make publication</button>
    </div>
  )
}

export default PostPublication