import React, {useEffect, useState} from 'react'
import NavBar from '../../Components/NavBar'
import '../../Styles/ChatPage/ChatPage.css';
import {
  getChatsUsersPetsByUser,
  createMessage,
  getChatsByUserChats,
  getMessagesByChat
} from '../../Services/ServicesChats.jsx'
import { getUsers } from '../../Services/ServicesUsers.jsx'


function Chat() {

  const [chatsUsersPets, setChatsUsersPets] = useState([])
  const [chats, setChats] = useState([])
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState("")
  const [currentChat, setCurrentChat] = useState(null)
  const [currentChatMessages, setCurrentChatMessages] = useState([])

  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))

  useEffect(() => {
    async function getData() {
      const chatsUsersPets = await getChatsUsersPetsByUser(currentUser)
      setChatsUsersPets(chatsUsersPets)

      const chats = await getChatsByUserChats(chatsUsersPets)
      setChats(chats)

      const users = await getUsers()
      setUsers(users)
    }
    getData()
  }, [])
  
  return (
    <div id="chatContainer">
      <header><NavBar /></header>
      <div id="sideBarChatPanelContainer">
        <div id="sideBar">
          <h1>sidebar</h1>
        </div>
        <div id="chatPanel">
            
        </div>
      </div>
    </div>
  )
}

export default Chat



/*
import React, { useState, useEffect } from 'react'
import NavBar from '../../Components/NavBar'
import {
  getChatsUsersPetsByUser,
  createMessage,
  getChatsByUserChats,
  getMessagesByChat
} from '../../Services/ServicesChats.jsx'

import { getUsers } from '../../Services/ServicesUsers.jsx'

function Chat() {

    

  const [chatsUsersPets, setChatsUsersPets] = useState([])
  const [chats, setChats] = useState([])
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState("")
  const [currentChat, setCurrentChat] = useState(null)
  const [currentChatMessages, setCurrentChatMessages] = useState([])

  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))

  useEffect(() => {
    async function getData() {
      const chatsUsersPets = await getChatsUsersPetsByUser(currentUser)
      setChatsUsersPets(chatsUsersPets)

      const chats = await getChatsByUserChats(chatsUsersPets)
      setChats(chats)

      const users = await getUsers()
      setUsers(users)
    }
    getData()
  }, [])

  useEffect(() => {
    if (!currentChat) return

    async function getMessages() {
      const chatMessages = await getMessagesByChat(currentChat.chat)
      setCurrentChatMessages(chatMessages)
    }

    getMessages()
  }, [currentChat])

  useEffect(() => {
    if (!currentChat) return

    const interval = setInterval(async () => {
      const chatMessages = await getMessagesByChat(currentChat.chat)
      setCurrentChatMessages(chatMessages)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentChat])

  function selectChat(chatUsersPet) {
    const chat = chats.find(c => c.id === Number(chatUsersPet.chat))
    if (!chat) return

    const otherUserId =
      chatUsersPet.member1 === currentUser.id
        ? chatUsersPet.member2
        : chatUsersPet.member1

    const otherUser = users.find(u => u.id === otherUserId)

    setCurrentChat({
      chat,
      chatUsersPet,
      otherUser
    })
  }

  async function sendMessage() {
    if (!currentChat || !message.trim()) return

    const newMessage = {
      message: message,
      date: new Date().toISOString(),
      answerTo: null,
      user: currentUser.id,
      chat: currentChat.chat.id
    }

    const createdMessage = await createMessage(newMessage)

    setCurrentChatMessages(prev => [...prev, createdMessage])
    setMessage("")
  }

  return (
    <div id="chatContainer">
      <header id="header"><NavBar /></header>

      <div id="sideBarChatPanelContainer">

        <div id="sideBar">
          {chatsUsersPets.map(chatUsersPet => {
            const chat = chats.find(c => c.id === Number(chatUsersPet.chat))
            const otherUserId =
              chatUsersPet.member1 === currentUser.id
                ? chatUsersPet.member2
                : chatUsersPet.member1

            const otherUserData = users.find(u => u.id === otherUserId)

            return (
              <div
                key={chatUsersPet.id}
                className="chatCards"
                onClick={() => selectChat(chatUsersPet)}
              >
                <strong>
                  {otherUserData
                    ? otherUserData.firstName + ' ' + otherUserData.lastName
                    : 'User unknown'}
                </strong>
                <br />
                {chat ? chat.about : 'Chat without information'}
              </div>
            )
          })}
        </div>

        <div id="chatPanel">

          <div id="contactInformation">
            {currentChat && (
              <h3>
                {currentChat.otherUser.firstName} {currentChat.otherUser.lastName}
              </h3>
            )}
          </div>

          <div id="messages">
            {currentChatMessages.map(msg => (
              <div
                key={msg.id}
                className={msg.user === currentUser.id ? 'myMessage' : 'otherMessage'}
              >
                <p>{msg.message}</p>
              </div>
            ))}
          </div>

          <div id="inputMessageContainer">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={!currentChat}
            />
            <button onClick={sendMessage} disabled={!currentChat}>
              Send
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Chat

*/