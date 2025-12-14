import React, {useState, useEffect} from 'react'
import { createTicket } from '../../Services/ServicesTickets'
import '../../Styles/ModeratorPage/ModeratorPage.css';

function MakeATicketForm() {

    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    const [ticketDescription, setTicketDescription] = useState("")

    async function sendTicket() {

        if(ticketDescription.trim() === ""){
            alert("fill empty spaces");
            return
        }

        const newTicket = {
            description: ticketDescription,
            ticketDate: new Date().toISOString().split("T")[0],
            ticketstatus: 1,
            user: currentUser.id
        }

        const ticket = await createTicket(newTicket)

        alert("ticket successfully sent")
        
    }
  return (
    <div div="ticketFormContainer">
        <h2>Open a ticket</h2>
        <p>Describe your problem or question.</p>
        <input type="text" value={ticketDescription} onChange={(e) => setTicketDescription(e.target.value)}/>
        <button onClick={sendTicket}>send ticket</button>
    </div>
  )
}

export default MakeATicketForm
