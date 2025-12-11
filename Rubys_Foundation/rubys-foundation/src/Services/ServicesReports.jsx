/* CRUD - Datos */

//(GET)
async function getReports() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/reports/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const report = await peticion.json();
        return report;

    } catch (error) {
        console.error("there is a problem getting UserGroup", error);
        throw error;
    }
}


//(POST)
async function createReport(newReport) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/reports/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReport)
        });

        if (!peticion.ok) {
            throw new Error("Error creating user");
        }

        const report = await peticion.json();


        return report;

    } catch (error) {
        console.error("Error creating user", error);
        throw error;
    }
}

//(PUT || PATCH)
async function updateReport(id, updateData) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/reports/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });

        if (!peticion.ok) {
            const text = await peticion.text();
            console.error("Server error:", text);
            throw new Error("Error updating report");
        }

        return await peticion.json();

    } catch (error) {
        console.error("Error updating report", error);
        throw error;
    }
}

//(DELETE)
async function deleteReport(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/reports/${id}`, {
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

export { getReports, createReport, updateReport, deleteReport};