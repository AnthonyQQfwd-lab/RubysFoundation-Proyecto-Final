/* CRUD - Pets*/

//(GET)
async function getPets() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/pets/', {
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
async function createPets(newUser) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/pets/', {
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
async function updatePets(id, updateData) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/pets/${id}`, {
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
async function deletePets(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/pets/${id}`, {
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


export { getPets, createPets, updatePets, deletePets};