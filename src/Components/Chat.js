import React, { useState, useEffect } from 'react';
import '../styles/Chat.css';
import db from '../firebase.js'; 
import firebase from 'firebase';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {

    const { roomId } = useParams();
    const [ { user }, dispatch ] = useStateValue();
    const [ roomName, setRoomName ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ input, setInput ] = useState('');

    useEffect(() => {
        if (roomId) {
           db.collection('rooms')
           .doc(roomId)
           .onSnapshot(snapshot => (
               setRoomName(snapshot.data().name)
           )); 

           db.collection('rooms')
           .doc(roomId)
           .collection('messages')
           .orderBy('timestamp', 'asc')
           .onSnapshot(snapshot => (
               setMessages(snapshot.docs.map(doc => 
                doc.data()))
           ));
        };
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('>>>>>>>', input);

        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>
                        vu aujourd'hui à {""}
                        {new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()
                        ).toLocaleTimeString()}
                    </p>
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

            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toLocaleString()}</span> 
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form action="">
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text" 
                    placeholder="Taper un message"/>
                    <button 
                    onClick={sendMessage}
                    type="submit">
                    Envoyer
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
};

export default Chat;
