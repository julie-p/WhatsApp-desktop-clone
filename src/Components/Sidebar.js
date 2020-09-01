import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import db from '../firebase.js'; 
import SidebarHeader from './SidebarHeader';
import SidebarSearch from './SidebarSearch';
import SidebarChat from './SidebarChat';


function Sidebar() {

    const [ rooms, setRooms ] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => 
            setRooms(snapshot.docs.map(doc => 
                ({ 
                    id: doc.id,
                    data: doc.data()
                }))    
            )
        )
    }, []);

    return (
        <div className="sidebar">

            <SidebarHeader />

            <SidebarSearch />

            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
};

export default Sidebar;
