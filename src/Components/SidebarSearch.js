import React from 'react';
import { SearchOutlined } from "@material-ui/icons";

function SidebarSearch() {
    return (
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Rechercher ou démarrer une nouvelle discussion" type="text"/>
            </div>
        </div>
    )
};

export default SidebarSearch;
