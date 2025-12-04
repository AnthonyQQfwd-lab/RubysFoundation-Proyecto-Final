/* CRUD - Datos */

//(GET)
async function getMediaBreeds() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/mediaBreeds/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const mediaBreeds = await peticion.json();
        return mediaBreeds;

    } catch (error) {
        console.error("there is a problem getting users", error);
        throw error;
    }
}

async function getMediaBreed(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/mediaBreeds/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting user ");
        }

        const mediaBreed = await peticion.json();
        return mediaBreed;

    } catch (error) {
        console.error("there is a problem getting mediaBreeds", error);
        throw error;
    }
}

//(POST)
async function createMediaBreed(newMediabreed) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/mediaBreeds/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMediabreed)
        });

        if (!peticion.ok) {
            const errorData = await peticion.json();
            console.error("Detalles del error:", errorData);
            throw new Error("Error creating user");

        }

        const mediaBreed = await peticion.json();


        return mediaBreed;

    } catch (error) {
        console.error("Error creating mediaBreed", error);
        throw error;
    }
}






export { getMediaBreeds, getMediaBreed, createMediaBreed};