import React, {useState} from 'react'
import { getUsers, createUsers, createusersdjango } from '../../Services/ServicesUsers';


function RegisterForm() {
    //Para realizar el select de ubicacion, necesito averiguar como traer la API de paises, y por cada seleccion que haga de el pais se desplegue para estados, despues que selecciono estado ahora ciudad 
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };
    
    const handleChangeState = (event) => {
        setState(event.target.value);
    };

    const handleChangeCity = (event) => {
        setCity(event.target.value);
    };

    async function getUsuarios() {
        const users = await getUsers()
        console.log(users)
    }

    async function registerUser(){
        
        if (
            country.trim() === '' ||
            state.trim() === '' ||
            city.trim() === '' ||
            firstName.trim() === '' ||
            lastName.trim() === '' ||
            phoneNumber.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmPassword.trim() === ''
            ) {
            alert("fill empty spaces");
            return;
        }

        if(password != confirmPassword){
            alert("fill paaswords dont match")
            return
        }


        const newUser = {
            firstName: firstName,
            lastName: lastName,
            username: firstName + lastName.replace(/\s/g, ""),
            phoneNumber: phoneNumber,
            country: country,
            state: state,
            city: city,
            email: email,
            password: password,
            petsHelped: 0,
            petsAdopted: 0,
            isMember: false,
            dateJoined: new Date().toISOString().split("T")[0],
            usertype: 1
        };

        const newUserD = {
            first_name: firstName,
            last_name: lastName,
            username: firstName + lastName.replace(/\s/g, ""),
            email: email,
            password: password,
            
        };

        
        const user = await createUsers(newUser)
        const userd = await createusersdjango(newUserD)

        console.log(user)
        console.log(userd);
        
    }

  return (
    <div>RegisterForm<br/>
        <input type="text" value={firstName}  placeholder='First name' onChange={(e) => setFirstName(e.target.value)}/><br/>
        <input type="text" value={lastName} placeholder='Last name' onChange={(e) => setLastName(e.target.value)}/><br/>
        <input type="text" value={phoneNumber} placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)}/><br/>
        <select name="country" id="country" value={country} onChange={handleChangeCountry}>
            <option value=" ">seleccione un pais</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Panama">Panama</option>
            <option value="Colombia">Colombia</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Costa rica">Costa rica</option>
        </select><br/>
        <select name="state" id="state" value={state} onChange={handleChangeState}>
            <option value="">Seleccione un estado/provincia</option>
            <option value="Managua">Managua</option>
            <option value="Ciudad de Panama">Ciudad de Panama</option>
            <option value="Bogota">Bogota</option>
            <option value="Caracas">Caracas</option>
            <option value="San jose">San jose</option>
        </select><br/>
        <select name="state" id="state" value={city} onChange={handleChangeCity}>
            <option value="">Seleccione una ciudad</option>
            <option value="Managua">Managua</option>
            <option value="Ciudad de Panama">Ciudad de Panama</option>
            <option value="Bogota">Bogota</option>
            <option value="Caracas">Caracas</option>
            <option value="San jose">San jose</option>
        </select><br/>
        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type="password" value={password}  placeholder='Password' onChange={(e) => setPassword(e.target.value)}/><br/>
        <input type="password" value={confirmPassword}  placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/><br/>
        <button onClick={registerUser}>Register</button>
        <button onClick={getUsuarios}>get</button>
    </div>
  )
}

export default RegisterForm