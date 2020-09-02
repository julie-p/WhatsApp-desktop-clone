import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import db from '../firebase.js'; 
import SidebarHeader from './SidebarHeader';
import SidebarSearch from './SidebarSearch';
import SidebarChat from './SidebarChat';


function Sidebar() {

    const [ rooms, setRooms ] = useState([]);

    useEffect(() => {
        const unsuscribe = db.collection('rooms').onSnapshot((snapshot) => 
            setRooms(snapshot.docs.map((doc) => 
                ({ 
                    id: doc.id,
                    data: doc.data(),
                }))    
            )
        );

        return () => {
            unsuscribe();
        };
    }, []);

    return (
        <div className="sidebar">

            <SidebarHeader />

            <SidebarSearch />

            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat 
                    key={room.id}
                    id={room.id}
                    name={room.data.name}/>
                ))}
            </div>
        </div>
    )
};

export default Sidebar;
