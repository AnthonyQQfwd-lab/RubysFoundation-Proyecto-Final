import React from 'react'
import MessageInput from './MessageInput'
import '../../Styles/ChatPage/ChatPage.css';

function MessagePanel({ currentChat }) {
  return (
    <div id="chatContainer">
      {/* Aquí irán los mensajes */}
      <div id="messagesList">
        
      </div>


      <div id="mesageInputContainer">
        <MessageInput />
      </div>
    </div>
  )
}

export default MessagePanel
