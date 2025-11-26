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

export {getStatesByCountry, getStates}