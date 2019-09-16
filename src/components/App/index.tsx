import React, { useEffect } from 'react';
import LoginForm from 'components/SignUp';
import ChatPage from 'components/Chat';
import { useSelector, useDispatch } from 'react-redux';
import { loadOldMessages } from 'modules/chat/actions/message';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector((state: any) => {
        return state.login.isLogged;
    });
    useEffect(() => {
        dispatch(loadOldMessages())
    }, [])
    return (
        <React.Fragment>
            {isLogged ? (<ChatPage />) : (<LoginForm />)}
            <ChatPage />
        </React.Fragment>
    );
};

export default App;