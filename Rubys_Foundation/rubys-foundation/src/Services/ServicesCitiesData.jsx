/* CRUD - Cities */

const API_KEY = "UE9TbFlRM2xJUWRnQllQVGFVRnFxWnE5cFRUT2NCcmZ0R09TbUllSg==";

//(GET city by state)
async function getsCitiesyByState(countryIso2, stateIso2) {
    try {
        const peticion = await fetch(`https://api.countrystatecity.in/v1/countries/${countryIso2}/states/${stateIso2}/cities`, {
            method: 'GET',
            headers: {
                "X-CSCAPI-KEY": API_KEY,
                'Content-Type': 'application/json',
                
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const cities = await peticion.json();
        return cities;

    } catch (error) {
        console.error("there is a problem getting cities", error);
        throw error;
    }
}


async function createCityLocal(newCity) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/cities/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCity)
        });

        if (!peticion.ok) {
            const errorData = await peticion.json();
            console.error("Detalles del error:", errorData);
            throw new Error("Error creating user");

        }

        const city = await peticion.json();


        return city;

    } catch (error) {
        console.error("Error creating city", error);
        throw error;
    }
}

export {getsCitiesyByState, createCityLocal}