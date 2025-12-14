/* CRUD - Tciekts */

//(GET)
async function getTickets() {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/tickets/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!peticion.ok) {
            throw new Error("Error getting ");
        }

        const Tickets = await peticion.json();
        return Tickets;

    } catch (error) {
        console.error("there is a problem getting Tickets", error);
        throw error;
    }
}

async function getTicket(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/tickets/${id}/`, {
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
        console.error("there is a problem getting Tickets", error);
        throw error;
    }
}

//(POST)
async function createTicket(newTicket) {
    try {
        const peticion = await fetch('http://127.0.0.1:8000/api/tickets/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTicket)
        });

        if (!peticion.ok) {
            const errorData = await peticion.json();
            console.error("Detalles del error:", errorData);
            throw new Error("Error creating Ticket");

        }

        const ticket = await peticion.json();


        return ticket;

    } catch (error) {
        console.error("Error creating Ticket", error);
        throw error;
    }
}

//(PUT || PATCH)
async function updateTicket(id, updateData) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/tickets/${id}/`, {
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
async function deleteTicket(id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/api/tickets/${id}/`, {
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

export { getTickets, createTicket, updateTicket, deleteTicket, getTicket};