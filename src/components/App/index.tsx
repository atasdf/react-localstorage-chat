import React from 'react';
import LoginForm from 'components/LoginPage';
import ChatPage from 'components/ChatPage';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
    const isLogged = useSelector((state: any) => {
        return state.account.isLogged;
    });
    return (
        <React.Fragment>
            {isLogged ? (<ChatPage />) : (<LoginForm />)}
        </React.Fragment>
    );
};

export default App;