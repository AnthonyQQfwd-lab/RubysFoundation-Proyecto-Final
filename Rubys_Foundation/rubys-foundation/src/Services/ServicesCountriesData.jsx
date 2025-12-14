/* CRUD - countries */
const API_URL = "https://api.countrystatecity.in/v1/countries";
const API_KEY = "UE9TbFlRM2xJUWRnQllQVGFVRnFxWnE5cFRUT2NCcmZ0R09TbUllSg==";

//(GET)
async function getCountries() {
    try {
        const peticion = await fetch(API_URL, {
            method: 'GET',
            headers: {
                "X-CSCAPI-KEY": API_KEY,
                'Content-Type': 'application/json',
                
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const countries = await peticion.json();
        return countries;

    } catch (error) {
        console.error("there is a problem getting Countries", error);
        throw error;
    }
}

async function getCountry(iso2) {
    try {
        const peticion = await fetch(`https://api.countrystatecity.in/v1/countries/${iso2}`, {
            method: 'GET',
            headers: {
                "X-CSCAPI-KEY": API_KEY,
                'Content-Type': 'application/json',
                
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const country = await peticion.json();
        return country;

    } catch (error) {
        console.error("there is a problem getting country", error);
        throw error;
    }
}

//(GET)
async function getCountriesLocal() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/countries/', {
            method: 'GET',
            headers: {
                "X-CSCAPI-KEY": API_KEY,
                'Content-Type': 'application/json',
                
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const countries = await peticion.json();
        return countries;

    } catch (error) {
        console.error("there is a problem getting Countries", error);
        throw error;
    }
}

async function getCountryByUser(user) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/countries/', {
            method: 'GET',
            headers: {
                "X-CSCAPI-KEY": API_KEY,
                'Content-Type': 'application/json',
                
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const countries = await peticion.json();
        const country = countries.find(country => country.id === Number(user.country))
        return country;

    } catch (error) {
        console.error("there is a problem getting Countries", error);
        throw error;
    }
}


async function createCountry(newCountry) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/countries/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCountry)
        });

        if (!peticion.ok) {
            const errorData = await peticion.json();
            console.error("Detalles del error:", errorData);
            throw new Error("Error creating user");

        }

        const country = await peticion.json();


        return country;

    } catch (error) {
        console.error("Error creating country", error);
        throw error;
    }
}

export {getCountries, createCountry, getCountriesLocal, getCountry, getCountryByUser}