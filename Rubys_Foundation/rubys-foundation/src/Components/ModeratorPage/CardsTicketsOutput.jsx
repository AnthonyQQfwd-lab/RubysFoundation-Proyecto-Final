import React, { useState, useEffect, useRef } from 'react';
import '../../Styles/ModeratorPage/ModeratorPage.css';

import { getTickets } from '../../Services/ServicesTickets'
import { getUsers } from '../../Services/ServicesUsers';
import { createAuditTicket } from '../../Services/ServicesAuditTickets';
import { updateTicket } from '../../Services/ServicesTickets';
function CardsTicketsOutput({ticketstatus}) {
  const [tickets, setTickets] = useState([])
  const [users, setUsers] = useState([])

  const [ticket, setTicket] = useState({})
  const [user, setUser] = useState({})


  const [moderatorAnswer, setModeratorAnswer] = useState("")
  const moderator = JSON.parse(sessionStorage.getItem('currentUser'));

  const replayDialog = useRef(null)
  const confirmReplyDialog = useRef(null)

  useEffect(() => {
    async function getData() {
      if(ticketstatus){
        const tickets = await getTickets();
        const filteredTickets  = tickets.filter(ticket => ticket.ticketstatus === 1)
        setTickets(filteredTickets)

        const usersRes = await getUsers();
        setUsers(usersRes)
      }
    }
    getData();
  }, [ticketstatus]);

  const openReplyModal = () => {
    
    replayDialog.current.showModal();
    
  };

  const closeReplyModal = () => {
    replayDialog.current.close();
  };

  const openConfirmReplymodal = () => {
    
    confirmReplyDialog.current.showModal();
    
  };

  const closeConfirmReplymodal = () => {
    confirmReplyDialog.current.close();
  };

  async function replyTicket() {
    
    const newAuditTicket = {
      moderatorAnswer: moderatorAnswer,
      answerDate: new Date().toISOString().split("T")[0],
      moderator: moderator.id,
      ticket: ticket.id
    }

    const ticketUpdate = {
      ...ticket,
      ticketstatus: 3 
    }

    const updatedTicket = await updateTicket(ticket.id, ticketUpdate)
    const auditTicket = await createAuditTicket(newAuditTicket)
    
    console.table(updatedTicket)
    console.table(auditTicket)


    const filteredTickets  = tickets.filter(ticket => ticket.ticketstatus === 1)
    setTickets(filteredTickets)

    confirmReplyDialog.current.close();
    replayDialog.current.close();
    alert("ticket resuelto ")
  }

  return (
    <div id="ticketsCardsContainer">
      
      <dialog ref={confirmReplyDialog} id='confirmReplyDialog'>
        <h3>Are you sure about the reply? </h3>
        <button onClick={replyTicket}>confirm Reply</button><button onClick={closeConfirmReplymodal}>keep editing</button>
      </dialog>

      <dialog ref={replayDialog} id='replayDialog'>
        <textarea
            value={moderatorAnswer}
            placeholder="leave the answer"
            className="commentBox"
            onChange={(e) => setModeratorAnswer(e.target.value)}
        ></textarea>
        <button onClick={openConfirmReplymodal}>send reply</button>
        <button onClick={closeReplyModal}>X</button>
      </dialog>

      {tickets.map(ticket => {
        const user = users.find(user => user.id === ticket.user);
        return (
          <div className="ticketsCards" key={ticket.id}>
            <h2>User: {user?.firstName}</h2>
            <h3>{ticket.description}</h3>
            <div className="ticketsDateContainer">
              <h3>{ticket.ticketDate}</h3>
            </div>
            <div className='btnsTicketsCardsContainer'>
              <button>Contact</button>
              <button onClick={() => { openReplyModal(); setTicket(ticket); setUser(user); }}>
                reply
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default CardsTicketsOutput
