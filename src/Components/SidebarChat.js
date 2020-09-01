import React from 'react';
import '../styles/SidebarChat.css';
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {

    const createChat = () => {
        const roomName = prompt("Chercher un contact");

        if (roomName) {
            //If addNewChat is clicked - do something
        }
    };
    
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Pseudo</h2>
                <p>Dernier message...</p>
            </div>
        </div>   
    ) : (
        <div 
        onClick={createChat}
        className="sidebarChat">
            <h2>Nouvelle discussion</h2>
        </div>
    )
};

export default SidebarChat;
