import React, {useState} from 'react'

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

  return (
    <div>RegisterForm
        <input type="text" value={firstName}  placeholder='First name' onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" value={lastName} placeholder='Last name' onChange={(e) => setLastName(e.target.value)}/>
        <input type="text" value={phoneNumber} placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)}/>
        <select name="country" id="country" value={country} onChange={handleChangeCountry}>
            <option value="Costa rica">Costa Rica</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Panama">Panama</option>
            <option value="Colombia">Colombia</option>
            <option value="Venezuela">Venezuela</option>
        </select>
        <select name="state" id="state" value={state} onChange={handleChangeState}>
            <option value="San jose">San jose</option>
            <option value="Managua">Managua</option>
            <option value="Ciudad de Panama">Ciudad de Panama</option>
            <option value="Bogota">Bogota</option>
            <option value="Caracas">Caracas</option>
        </select>
        <select name="state" id="state" value={city} onChange={handleChangeCity}>
            <option value="San jose">San jose</option>
            <option value="Managua">Managua</option>
            <option value="Ciudad de Panama">Ciudad de Panama</option>
            <option value="Bogota">Bogota</option>
            <option value="Caracas">Caracas</option>
        </select>
        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" value={password}  placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" value={confirmPassword}  placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/>
    </div>
  )
}

export default RegisterForm