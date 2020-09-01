import React from 'react';
import '../styles/Sidebar.css';
import SidebarHeader from './SidebarHeader';
import SidebarSearch from './SidebarSearch';
import SidebarChat from './SidebarChat';


function Sidebar() {

    return (
        <div className="sidebar">

            <SidebarHeader />

            <SidebarSearch />

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
};

export default Sidebar;
