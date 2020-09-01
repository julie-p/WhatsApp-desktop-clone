import React from 'react';

function ChatBody() {
    return (
        <div className="chat__body">
            <p className={`chat__message ${true && 'chat__receiver'}`}>
                <span className="chat__name">Lily</span>
            Coucou !  
            <span className="chat__timestamp">00:09am</span> 
            </p>
        </div>
    )
};

export default ChatBody;
