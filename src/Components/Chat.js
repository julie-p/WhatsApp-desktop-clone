import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Chat.css';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

function Chat() {

    const { roomId } = useParams();
    
    return (
        <div className="chat">
            <ChatHeader />

            <ChatBody />

            <ChatFooter />
        </div>
    )
};

export default Chat;
