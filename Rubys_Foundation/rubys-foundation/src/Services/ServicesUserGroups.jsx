/* CRUD - Datos */

//(GET)
async function getUserGroup() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/usergroup/', {
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
        console.error("there is a problem getting UserGroup", error);
        throw error;
    }
}

//(POST)
async function createUserGroup(newUser) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/usergroup/', {
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
async function createUserGroupdjango(newUser) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/usergroup/', {
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
async function updateUserGroup(id, updateData) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/usergroup/${id}`, {
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
async function deleteUserGroup(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/usergroup/${id}`, {
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

export { getUserGroup, createUserGroup, updateUserGroup, deleteUserGroup, createUserGroupdjango};