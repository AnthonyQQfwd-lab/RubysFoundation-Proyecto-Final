/* CRUD - Cities */

const API_KEY = "UE9TbFlRM2xJUWRnQllQVGFVRnFxWnE5cFRUT2NCcmZ0R09TbUllSg==";

//(GET city by state)
async function getSCitiesyByState(countryIso2, stateIso2) {
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

export {getSCitiesyByState}