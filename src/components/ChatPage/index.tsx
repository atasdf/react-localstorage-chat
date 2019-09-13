import React from 'react';

const ChatPage: React.FC = () => {
    const username = sessionStorage.getItem('username');
    return (
        <h1>
            Hello {username}! U are logged! 
        </h1>
    );
};

export default ChatPage;