import React from 'react'
import { useNavigate, Link } from 'react-router-dom';



function HelpForm() {
  return (
    <div>
      {/*se aliemtara con la tabla auditTicket */}
      <h2>Problems and frequently asked questions</h2>
      

      <small>Need more help? <Link to="/Ticket">Open a ticket with a moderator</Link></small>
    </div>
  )
}

export default HelpForm
