import React from 'react';
import '../styles/SidebarChat.css';
import { Link } from 'react-router-dom';
import db from '../firebase.js'; 
import { Avatar } from "@material-ui/core";

function SidebarChat({ id, name, addNewChat }) {

    const createChat = () => {
        const roomName = prompt("Chercher un contact");

        if (roomName) {
            //If addNewChat is clicked - add a room in db
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };
    
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Dernier message...</p>
                </div>
            </div> 
        </Link>   
    ) : (
        <div 
        onClick={createChat}
        className="sidebarChat">
            <h2>Nouvelle discussion</h2>
        </div>
    )
};

export default SidebarChat;
