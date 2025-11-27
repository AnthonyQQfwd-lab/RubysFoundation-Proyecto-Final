import React, {useState, useEffect} from 'react'
//import del los services de pets para lamacenar la informacion de la pet en la tabla de pets 
import { getPets, createPets } from '../../Services/ServicesPets'
// importo de los services de media pets para lamacenar todos los archivo media de las pets 
import { getMediaPets } from '../../Services/ServicesMediaPets'
//import de los ervices de publicactions para crear las publicaciones
import { getPublications } from '../../Services/ServicesPublications'
import { getDogs } from '../../Services/ServicesSpecies'
import { getCats } from '../../Services/ServicesSpecies'
import '../../Styles/PostPage/PostPage.css'
function PostPublication() {

    

    const [name, setname] = useState("")
    const [age, setAge] = useState(0)
    const [breed, setBreed] = useState("")
    const [breedId, setBreedId] = useState("")
    const [specie, setSpecie] = useState("")
    const [vaccinated, setVaccinated] = useState("")
    const [reward, setReward] = useState("")
    const [description, setDescription] = useState("")

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
        setVaccinated(event.target.value);
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


  return (
    <div>PostPublication
        <label htmlFor="">Name</label><br/>
        <input type="text" value={name} placeholder='name' onChange={(e) => setname(e.target.value)} /><br/>
        <label>Choose a picture or video:</label><br/><br/>
        <input type="file"/><br/>
        <label htmlFor="">Age</label><br/>
        <input type="number" value={age}  placeholder='Age' onChange={(e) => setAge(e.target.value)}/><br/>
        <select name="specie" id="specie" value={specie} onChange={handleChangeSpecie}>
            <option value=" ">seleccione una especie</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
            <option value="reptile">reptile</option>
        </select><br/>
        <select name="breedId" id="breedId" value={breedId} onChange={handleChangebreed}>
            <option value="">Select a breed</option>
            {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                {breed.name}
                </option>
            ))}
        </select>    
            {breedId && (() => {
            const breed = breeds.find(breed => breed.id == breedId); 
            if (breed && breed.image && breed.image.url) {
                return (
                <div>
                    <img src={breed.image.url} alt={breed.name} width="200" />
                </div>
                );
            } else {
                return <p>No image available for this breed</p>;
            }
            })()}

        <select name="vaccinated" id="vaccinated" value={vaccinated} onChange={handleChangeVaccinated}>
            <option value=" ">is it vaccinated?</option>
            <option value="no">No</option>
            <option value="i dont know">I dont know</option>
            <option value="some">some</option>
            <option value="Yes">Yes</option>
        </select><br/>
        <label htmlFor="">Reward?</label><br/>
        <input type="number" value={reward} placeholder='reward' onChange={(e) => setReward(e.target.value)} /><br/>
        <label htmlFor="">Description</label><br/>
        <input type="text" value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} /><br/>\
        <button onClick={seeBreedId}>see id breed</button>
        <button onClick={getCat}>see cats</button>
    </div>
  )
}

export default PostPublication