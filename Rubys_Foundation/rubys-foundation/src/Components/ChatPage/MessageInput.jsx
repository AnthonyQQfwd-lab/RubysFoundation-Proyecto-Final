import React, {useState, useEffect} from 'react'
import '../../Styles/ChatPage/ChatPage.css';
import { getChatByChatUsersPet } from '../../Services/ServicesChats';
function MessageInput({currentChat}) {
    const [message, setMessage] = useState("")
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    

    async function sendMessage() {

        const chat = await getChatByChatUsersPet(currentChat);
        
        const newMessage = {
            message: message,
            date: new Date().toISOString().split('T')[0],
            user: currentUser.id,
            chat: chat.id
        }
       
        
    }
  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/> <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default MessageInput
