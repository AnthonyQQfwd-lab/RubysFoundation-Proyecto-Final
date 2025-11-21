/* CRUD - Datos */

//(GET)
async function getLogin() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/login/', {
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
        console.error("there is a problem getting Login", error);
        throw error;
    }
}

//(POST)
async function createLogin(newUser) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!peticion.ok) {
            throw new Error("Error creating user");
        }

        const createUser = await peticion.json();


        return createUser;

    } catch (error) {
        console.error("Error creating user", error);
        throw error;
    }
}

//(POST)
async function createLogindjango(newUser) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/logindjango/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!peticion.ok) {
            throw new Error("Error creating user");
        }

        const createUser = await peticion.json();


        return createUser;

    } catch (error) {
        console.error("Error creating user", error);
        throw error;
    }
}

//(PUT || PATCH)
async function updateLogin(id, updateData) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/login/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });

        if (!peticion.ok) {
            throw new Error("Error updating user");
        }

        const updateUser = await peticion.json();
        return updateUser;

    } catch (error) {
        console.error("Error updating user", error);
        throw error;
    }
}

//(DELETE)
async function deleteLogin(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/login/${id}`, {
            method: 'DELETE'
        });

        if (!peticion.ok) {
            throw new Error("Error deleting user");
        }

        return { mensaje: "user correctly delete" };

    } catch (error) {
        console.error("Error deleting user", error);
        throw error;
    }
}

export { getLogin, createLogin, updateLogin, deleteLogin, createLogindjango};