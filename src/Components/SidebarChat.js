import React, { useState, useEffect } from 'react';
import '../styles/SidebarChat.css';
import { Link } from 'react-router-dom';
import db from '../firebase.js'; 
import { Avatar } from "@material-ui/core";

function SidebarChat({ id, name, addNewChat }) {

    const [ messages, setMessages ] = useState("");

    useEffect(() => {
        if (id) {
            db
            .collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ))
        }
    }, []);

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
                    <p>{messages[0]?.message}</p>
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
