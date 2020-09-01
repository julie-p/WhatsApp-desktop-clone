import React, { useState } from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function ChatFooter() {

    const [ input, setInput ] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('>>>>>>>', input);

        setInput("");
    };

    return (
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
    )
};

export default ChatFooter;
