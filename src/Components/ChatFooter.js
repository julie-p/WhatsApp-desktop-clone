import React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function ChatFooter() {
    return (
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form action="">
                <input type="text" placeholder="Taper un message"/>
                <button>Envoyer</button>
            </form>
            <MicIcon />
        </div>
    )
};

export default ChatFooter;
