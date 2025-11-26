/* CRUD - Breed*/

//(GET)
async function getBreeds() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/breeds/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const Usuarios = await peticion.json();
        return Usuarios;

    } catch (error) {
        console.error("there is a problem getting MediaPets", error);
        throw error;
    }
}

//(POST)
async function createBreeds(breed) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/breeds/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!peticion.ok) {
            throw new Error("Error creating ");
        }

        const createUser = await peticion.json();


        return createUser;

    } catch (error) {
        console.error("Error creating media", error);
        throw error;
    }
}


//(PUT || PATCH)
async function updateBreeds(id, updateData) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/breeds/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });

        if (!peticion.ok) {
            throw new Error("Error updating ");
        }

        const updateUser = await peticion.json();
        return updateUser;

    } catch (error) {
        console.error("Error updating user", error);
        throw error;
    }
}

//(DELETE)
async function deleteBreeds(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/breeds/${id}`, {
            method: 'DELETE'
        });

        if (!peticion.ok) {
            throw new Error("Error deleting ");
        }

        return { mensaje: "user correctly delete" };

    } catch (error) {
        console.error("Error deleting user", error);
        throw error;
    }
}


/* CRUD - Species*/

//(GET)
async function getSpecies() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/breeds/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const Usuarios = await peticion.json();
        return Usuarios;

    } catch (error) {
        console.error("there is a problem getting MediaPets", error);
        throw error;
    }
}

//(POST)
async function createSpecies(newUser) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/mediaPets/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!peticion.ok) {
            throw new Error("Error creating ");
        }

        const createUser = await peticion.json();


        return createUser;

    } catch (error) {
        console.error("Error creating media", error);
        throw error;
    }
}


//(PUT || PATCH)
async function updateSpecies(id, updateData) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/mediaPets/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });

        if (!peticion.ok) {
            throw new Error("Error updating ");
        }

        const updateUser = await peticion.json();
        return updateUser;

    } catch (error) {
        console.error("Error updating user", error);
        throw error;
    }
}

//(DELETE)
async function deleteSpecies(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/mediaPets/${id}`, {
            method: 'DELETE'
        });

        if (!peticion.ok) {
            throw new Error("Error deleting ");
        }

        return { mensaje: "user correctly delete" };

    } catch (error) {
        console.error("Error deleting user", error);
        throw error;
    }
}

export { getBreeds, createBreeds, updateBreeds, deleteBreeds};
export { getSpecies, createSpecies, updateSpecies, deleteSpecies};