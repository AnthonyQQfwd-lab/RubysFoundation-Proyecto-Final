import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import ChatsSideBar from '../../Components/ChatPage/ChatsSideBar';
import { createChat, getChats, getChatsUsersPetsByUser, createChatsUsersPets } from '../../Services/ServicesChats';
import '../../Styles/ChatPage/ChatPage.css';

function ChatPage() {
  const location = useLocation();
  const anotherUser = location.state?.anotherUser;
  const pet = location.state?.pet;
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  const [chatsUsersPets, setChatsusersPets] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  console.log(currentUser);

  useEffect(() => {
    async function getData() {
      try {
        const chatsUsersPetsData = await getChatsUsersPetsByUser(currentUser);

        const existingChat = chatsUsersPetsData.find(cup =>
          ((cup.member1.id === currentUser.id && cup.member2.id === anotherUser.id) ||
          (cup.member2.id === currentUser.id && cup.member1.id === anotherUser.id)) &&
          cup.pet.id === pet.id
        );

        if (existingChat) {
          setCurrentChat(existingChat);
        } else {
          const newChat = {
            about: `Chat sobre ${pet.name}`
          };
          const chat = await createChat(newChat);

          const newChatUsersPet = {
            member1: currentUser.id,
            member2: anotherUser.id,
            pet: pet.id,
            chat: chat.id
          };

          const chatUsersPet = await createChatsUsersPets(newChatUsersPet);

          setCurrentChat(chatUsersPet);
          setChatsusersPets(chatsUsersPetsData);
        }

        const allChats = await getChats();
        setChats(allChats);

      } catch (error) {
        console.error("Error al inicializar chat", error);
      }
    }
    getData();
  }, []);

  if (!anotherUser || !pet) {
    return <div>Error: data not found</div>;
  }

  return (
    <div id="chatPageContainer">
      <header><NavBar /></header>
      <aside id="chatSideBarContainer">
        <ChatsSideBar 
          chatsUsersPet={chatsUsersPets} 
          chats={chats} 
          currentUser={currentUser} 
        />
      </aside>
      <div id="chatContainer">
        {/* Aquí va  chat activo */}
      </div>
    </div>
  );
}

export default ChatPage;
