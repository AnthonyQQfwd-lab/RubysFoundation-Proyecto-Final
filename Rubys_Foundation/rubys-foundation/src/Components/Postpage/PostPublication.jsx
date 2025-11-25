import React, {useState} from 'react'
import { getCountries } from '../../Services/ServicesCountriesData'
function PostPublication() {
    const [name, setname] = useState("")
    const [age, setAge] = useState(0)
    const [breed, setBreed] = useState("")
    const [specie, setSpecie] = useState("")
    const [vaccinated, setVaccinated] = useState("")
    const [reward, setReward] = useState("")

    const handleChangebreed = (event) => {
        setBreed(event.target.value);
    };

    const handleChangeSpecie = (event) => {
        setSpecie(event.target.value);
    };

    const handleChangeVaccinated = (event) => {
        setVaccinated(event.target.value);
    };

    async function getpaises(){
        const countries = await getCountries();
        console.log(countries)
    }

  return (
    <div>PostPublication
        <label htmlFor="">Name</label>
        <input type="text" value={name} placeholder='name' onChange={(e) => setname(e.target.value)} />
        <label>Choose a picture or video:</label><br/>
        <input type="file"/><br/>
        <label htmlFor="">Age</label><br/>
        <input type="number"  placeholder='Age' onChange={(e) => setAge(e.target.value)}/><br/>
        <select name="breed" id="breed" value={breed} onChange={handleChangebreed}>
            <option value=" ">seleccione una raza</option>
            <option value="Orange">Orange</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Calico">Calico</option>
            <option value="Coffee">Coffee</option>
        </select><br/>
        <select name="specie" id="specie" value={specie} onChange={handleChangeSpecie}>
            <option value=" ">seleccione una especie</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
            <option value="reptile">reptile</option>
        </select><br/>
        <select name="vaccinated" id="vaccinated" value={vaccinated} onChange={handleChangeVaccinated}>
            <option value=" ">Esta vacunado?</option>
            <option value="Cat">No</option>
            <option value="Dog">I dont know</option>
            <option value="Bird">some</option>
            <option value="Fish">Yes</option>
        </select><br/>
        <label htmlFor="">Reward?</label><br/>
        <input type="number" value={reward} placeholder='reward' onChange={(e) => setReward(e.target.value)} /><br/>
        <button onClick={getpaises}>GeT countries</button>
    </div>
  )
}

export default PostPublication