import React, { useState, useEffect } from 'react';
import '../styles/SidebarChat.css';
/* import db from '../firebase.js'; */
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {

    /* const [ rooms, setRooms ] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => 
            setRooms(snapshot.docs.map(doc => 
                ({ 
                    id: doc.id,
                    data: doc.data()
                }))    
            )
        )
    }, []); */

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
