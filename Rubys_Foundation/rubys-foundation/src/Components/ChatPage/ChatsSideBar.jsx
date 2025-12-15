import React, { useState, useEffect } from 'react';
import { getUsers } from '../../Services/ServicesUsers';
import { getPets } from '../../Services/ServicesPets';

function ChatsSideBar({ chatsUsersPet, chats, currentUser }) {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const usersData = await getUsers();
        setUsers(usersData);

        const petsData = await getPets();
        setPets(petsData);
      } catch (error) {
        console.error("Error al inicializar chat", error);
      }
    }
    getData();
  }, []);

  return (
    <div id="chatsListContainer">
      {chatsUsersPet.map(chatUsersPet => {
        // Encontrar el chat completo
        const chat = chats.find(chat => chat.id === Number(chatUsersPet.chat));

        // Determinar quién es el otro usuario (el que no es currentUser)
        const otherUserId = chatUsersPet.member1 === currentUser.id ? chatUsersPet.member2 : chatUsersPet.member1;
        const otherUserData = users.find(user => user.id === otherUserId);

        return (
          <div key={chatUsersPet.id} className="chatCard">
            <strong>{otherUserData ? otherUserData.firstName + ' ' + otherUserData.lastName : 'User unknown'}:</strong><br/>
            {chat ? chat.about : 'Chat without information'}
          </div>
        );
      })}
    </div>
  );
}

export default ChatsSideBar;
