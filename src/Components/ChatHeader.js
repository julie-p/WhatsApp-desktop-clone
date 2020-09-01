import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';

function ChatHeader() {

    const [ seed, setSeed ] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

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
