/* CRUD - Datos */
const API_URL = "https://api.countrystatecity.in/v1";
const API_KEY = "404AAA75-62DA-40F4-A3B5-1400AE452FB1";

//(GET)
async function getCountries() {
    try {
        const peticion = await fetch(API_URL, {
            method: 'GET',
            headers: {
                "x-api-key": API_KEY,
                'Content-Type': 'application/json',
                
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const Usuarios = await peticion.json();
        return Usuarios;

    } catch (error) {
        console.error("there is a problem getting Countries", error);
        throw error;
    }
}

//(POST)
async function createCountries(newCountry) {
    try {
        const peticion = await fetch('http://localhost:3001/Countries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCountry)
        });

        if (!peticion.ok) {
            throw new Error("Error creating Country");
        }

        const createCountry = await peticion.json();


        return createCountry;

    } catch (error) {
        console.error("Error creating Country", error);
        throw error;
    }
}

//(PUT || PATCH)
async function updateCountries(id, updateData) {
    try {
        const peticion = await fetch(`http://localhost:3001/Countries/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });

        if (!peticion.ok) {
            throw new Error("Error updating Country");
        }

        const updateCountry = await peticion.json();
        return updateCountry;

    } catch (error) {
        console.error("Error updating Country", error);
        throw error;
    }
}

//(DELETE)
async function deleteCountries(id) {
    try {
        const peticion = await fetch(`http://localhost:3001/Countries/${id}`, {
            method: 'DELETE'
        });

        if (!peticion.ok) {
            throw new Error("Error deleting Country");
        }

        return { mensaje: "Country correctly delete" };

    } catch (error) {
        console.error("Error deleting Country", error);
        throw error;
    }
}

export { getCountries, createCountries, updateCountries, deleteCountries};