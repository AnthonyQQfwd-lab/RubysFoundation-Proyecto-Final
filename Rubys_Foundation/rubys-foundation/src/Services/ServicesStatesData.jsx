/* CRUD - countries */
const API_URL = "https://api.countrystatecity.in/v1/states";
const API_KEY = "UE9TbFlRM2xJUWRnQllQVGFVRnFxWnE5cFRUT2NCcmZ0R09TbUllSg==";

//(GET all states)
async function getStates() {
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



//(GET state by country)
async function getStatesByCountry(countryIso2) {
    try {
        const peticion = await fetch(`https://api.countrystatecity.in/v1/countries/${countryIso2}/states`, {
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


async function getStatesLocal() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/states/', {
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




async function createState(newState) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/states/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newState)
        });

        if (!peticion.ok) {
            const errorData = await peticion.json();
            console.error("Detalles del error:", errorData);
            throw new Error("Error creating user");

        }

        const state = await peticion.json();


        return state;

    } catch (error) {
        console.error("Error creating state", error);
        throw error;
    }
}

export {getStatesByCountry, getStates, createState, getStatesLocal}