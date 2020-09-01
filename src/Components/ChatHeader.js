import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';

function ChatHeader() {

    return (
        <div className="chat__header">
            <Avatar />

            <div className="chat__headerInfo">
                <h3>Pseudo</h3>
                <p>vu aujourd'hui à 00:09</p>
            </div>

            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton> 
            </div>
        </div>
    )
};

export default ChatHeader;
