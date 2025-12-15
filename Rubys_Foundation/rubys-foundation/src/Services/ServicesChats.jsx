/* CRUD - Chats y ChatsUsersPets */

// GET chatsUsersPets de un usuario
async function getChatsUsersPetsByUser(user) {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/chatsuserspets/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error("Error getting chatsUsersPets");

        const data = await res.json();
        // Filtrar solo los chats donde participa el user
        return data.filter(chat => chat.member1 === user.id || chat.member2 === user.id);
    } catch (error) {
        console.error("Error getting chatsUsersPets", error);
        throw error;
    }
}

// GET todos los chats
async function getChats() {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/chats/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error("Error getting chats");

        return await res.json();
    } catch (error) {
        console.error("Error getting chats", error);
        throw error;
    }
}

// Filtrar chats por los userChats
async function getChatsByUserChats(userChats) {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/chats/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error("Error getting chats");

        const chatsUser = await res.json();
        return chatsUser.filter(chat =>
            userChats.some(userChat => userChat.chat === chat.id)
        );
    } catch (error) {
        console.error("Error filtering chats", error);
        throw error;
    }
}

async function getChatByChatUsersPet(userChats) {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/chats/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error("Error getting chats");

        const chatsUser = await res.json();

        const chat = chatsUser.find(chat => chat.id === userChats.chat)
        return chat;
       
        
    } catch (error) {
        console.error("Error filtering chats", error);
        throw error;
    }
}



// POST crear un chat
async function createChat(newChat) {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/chats/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newChat)
        });
        if (!res.ok) {
            const errData = await res.json();
            console.error("Error details:", errData);
            throw new Error("Error creating chat");
        }
        return await res.json();
    } catch (error) {
        console.error("Error creating chat", error);
        throw error;
    }
}

// POST crear un chatUserPet
async function createChatsUsersPets(newChatUserPet) {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/chatsuserspets/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newChatUserPet)
        });
        if (!res.ok) {
            const errData = await res.json();
            console.error("Error details:", errData);
            throw new Error("Error creating chat user-pet");
        }
        return await res.json();
    } catch (error) {
        console.error("Error creating chat user-pet", error);
        throw error;
    }
}

// Exportar todas las funciones
export {
    getChatsUsersPetsByUser,
    createChatsUsersPets,
    createChat,
    getChats,
    getChatsByUserChats,
    getChatByChatUsersPet
};
