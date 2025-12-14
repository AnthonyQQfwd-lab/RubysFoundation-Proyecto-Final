/* CRUD - AuditAuditTickets */

//(GET)
async function getAuditTickets() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/auditTickets/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const AuditTickets = await peticion.json();
        return AuditTickets;

    } catch (error) {
        console.error("there is a problem getting AuditTickets", error);
        throw error;
    }
}

async function getAuditTicket(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/auditTickets/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting Ticket ");
        }

        const Ticket = await peticion.json();
        return Ticket;

    } catch (error) {
        console.error("there is a problem getting AuditTickets", error);
        throw error;
    }
}

//(POST)
async function createAuditTicket(newAuditTicket) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/auditTickets/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAuditTicket)
        });

        if (!peticion.ok) {
            const errorData = await peticion.json();
            console.error("Detalles del error:", errorData);
            throw new Error("Error creating Ticket");

        }

        const auditTicket = await peticion.json();


        return auditTicket;

    } catch (error) {
        console.error("Error creating Ticket", error);
        throw error;
    }
}

//(PUT || PATCH)
async function updateAuditTicket(id, updateData) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/auditTickets/${id}/`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });

        if (!peticion.ok) {
            throw new Error("Error updating Ticket");
        }

        const ticket = await peticion.json();
        return ticket;

    } catch (error) {
        console.error("Error updating Ticket", error);
        throw error;
    }
}

//(DELETE)
async function deleteAuditTicket(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/auditTickets/${id}/`, {
            method: 'DELETE'
        });

        if (!peticion.ok) {
            throw new Error("Error deleting Ticket");
        }

        return { mensaje: "Ticket correctly delete" };

    } catch (error) {
        console.error("Error deleting Ticket", error);
        throw error;
    }
}

export { getAuditTickets, createAuditTicket, updateAuditTicket, deleteAuditTicket, getAuditTicket};