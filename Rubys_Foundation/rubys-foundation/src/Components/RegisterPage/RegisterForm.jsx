import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUsers, createusersdjango } from '../../Services/ServicesUsers';
import { createUserGroup } from '../../Services/ServicesUserGroups';
import { getCountries } from '../../Services/ServicesCountriesData';
import { getStatesByCountry } from '../../Services/ServicesStatesData';
import { getsCitiesyByState } from '../../Services/ServicesCitiesData';

import { getCountriesLocal } from '../../Services/ServicesCountriesData';
import { getStatesLocal } from '../../Services/ServicesStatesData';
import { getsCitiesLocal } from '../../Services/ServicesCitiesData';

function RegisterForm() {
    const navigate = useNavigate();

    const [countries, setCountries] = useState([])
    const [countryId, setCountryId] = useState('');
    const [country, setCountry] = useState({});
    const [states, setStates] = useState([]);
    const [stateId, setStateId] = useState("")
    const [state, setState] = useState({})
    const [cities, setCities] = useState([]);
    const [cityId, setCityId] = useState('');
    const [city, setCity] = useState({});

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //funcion que llama a todos los paises para ponerlo en el select 
    useEffect(() => {
        async function loadCountries() {
            const countriesData = await getCountriesLocal();
            setCountries(countriesData);
        }
        loadCountries();
    }, []);

    const handleChangeCountry = (event) => {
        const value = event.target.value;
        setCountryId(value);
        setStateId('');
        setState({});
        setCityId('');
        setCity({});
        setCities([]);
    };

    useEffect(() => {
        async function loadCountry() {
            if (!countryId) return;
            const countries = await getCountriesLocal()
            const country = countries.find(country => country.id == countryId);
            setCountry(country)
        }
        loadCountry()
    }, [countryId]);

    //una vez que el country haya sido seleccionado se cargan los states de ese  pais 

    useEffect(() => {
        async function getStatesData() {
            if (!country.iso2) return;
            const statesData = await getStatesLocal(country.iso2);
            setStates(statesData)
        }
        getStatesData()
    }, [country]);

    const handleChangeState = (event) => {
        const value = event.target.value;
        setStateId(value);
        setCityId('');
        setCity({});
    };

    useEffect(() => {
        async function loadState() {
            if (!stateId || states.length === 0) return;
            const selectedState = states.find(state => state.id == stateId);
            setState(selectedState);
        }
        loadState();
    }, [stateId, states]);

    // una vez que se selecciono el state se llaman todas las ciudades de ese state para ser mostradar en el select 

    useEffect(() => {
        async function getCities() {
            if (!country.iso2 || !state.iso2State) return;
            const citiesData = await getsCitiesLocal();
            const filteredCities = citiesData.filter(
                (city) =>
                    city.iso2State === state.iso2State 
            );
            setCities(filteredCities);
        }
        getCities();
    }, [state, country]);


    const handleChangeCity = (event) => {
        const value = event.target.value;
        setCityId(value);
        const selectedCity = cities.find(city => city.id == value);
        setCity(selectedCity);
    };

    async function registerUser(){
        
        if (
            countryId.trim() === '' ||
            stateId.trim() === '' ||
            cityId.trim() === '' ||
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

        if(password !== confirmPassword){
            alert("passwords dont match")
            return
        }

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            username: email,
            phoneNumber: phoneNumber,
            country: countryId,
            state: stateId,
            city: cityId,
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
            username: email,
            email: email,
            password: password,
        };

        const user = await createUsers(newUser)
        const userd = await createusersdjango(newUserD)

        const newUserGroup = {
            user: userd.id,
            group: 1
        }

        const userGroup = await createUserGroup(newUserGroup)

        navigate('/Login')
    }

    

    return (
        <div>RegisterForm<br/>
            <input type="text" value={firstName} placeholder='First name' onChange={(e) => setFirstName(e.target.value)}/><br/>
            <input type="text" value={lastName} placeholder='Last name' onChange={(e) => setLastName(e.target.value)}/><br/>
            <input type="text" value={phoneNumber} placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)}/><br/>
            
            <select name="countryId" id="countryId" value={countryId} onChange={handleChangeCountry}>
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country.id}>{country.name}</option>
                ))}
            </select>
            
            <select value={stateId} onChange={handleChangeState}>
                <option value="">Select a state</option>
                {states.map((state, index) => (
                    <option key={index} value={state.id}>{state.name}</option>
                ))}
            </select><br />

            <select value={cityId} onChange={handleChangeCity}>
                <option value="">Select a city</option>
                {cities.map((city, index) => (
                    <option key={index} value={city.id}>{city.name}</option>
                ))}
            </select><br />

            <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/><br/>
            <input type="password" value={confirmPassword} placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/><br/>
            <button onClick={registerUser}>Register</button>
        </div>
    )
}

export default RegisterForm