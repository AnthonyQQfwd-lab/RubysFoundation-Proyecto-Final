import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import ChatsSideBar from '../../Components/ChatPage/ChatsSideBar';
import MessagePanel from '../../Components/ChatPage/MessagePanel';
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

  // Función para crear un chat
  const handleCreateChat = async () => {
    try {
      const newChat = { about: `Chat sobre ${pet.name}` };
      const chat = await createChat(newChat);

      const newChatUsersPet = {
        member1: currentUser.id,
        member2: anotherUser.id,
        pet: pet.id,
        chat: chat.id
      };

      const chatUsersPet = await createChatsUsersPets(newChatUsersPet);

      setChatsusersPets(prev => [...prev, chatUsersPet]);
      setCurrentChat(chatUsersPet);

    } catch (error) {
      console.error("Error creando chat", error);
    }
  };

  // Cargar chats y seleccionar el chat existente o crear uno automáticamente
  useEffect(() => {
    async function getData() {
      try {
        const chatsUsersPetsData = await getChatsUsersPetsByUser(currentUser);
        setChatsusersPets(chatsUsersPetsData);

        const allChats = await getChats();
        setChats(allChats);

        // Verificar si ya existe un chat con este usuario y mascota
        const existingChat = chatsUsersPetsData.find(cup =>
          ((cup.member1.id === currentUser.id && cup.member2.id === anotherUser.id) ||
           (cup.member2.id === currentUser.id && cup.member1.id === anotherUser.id)) &&
          cup.pet.id === pet.id
        );

        if (existingChat) {
          setCurrentChat(existingChat);
        } else {
          await handleCreateChat(); // ⚡ Crear chat automáticamente si no existe
        }

      } catch (error) {
        console.error("Error al inicializar chat", error);
      }
    }

    if (anotherUser && pet) {
      getData();
    }

  }, [currentUser, anotherUser, pet]);

  // Seleccionar chat desde sidebar
  const handleSelectChat = (chatUsersPet) => {
    setCurrentChat(chatUsersPet);
  };

  if (!anotherUser || !pet) {
    return <div>Error: data not found</div>;
  }

  return (
    <div>
      <header><NavBar /></header>

      <div id="chatPageContainer">
        <aside id="chatSideBarContainer">
          <ChatsSideBar
            chatsUsersPet={chatsUsersPets}
            chats={chats}
            currentUser={currentUser}
            onSelectChat={handleSelectChat}
          />
        </aside>

        <div id="chatContainer">
          {currentChat ? (
            <MessagePanel currentChat={currentChat} />
          ) : (
            <div style={{ padding: '20px' }}>
              <h2>Cargando chat...</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
