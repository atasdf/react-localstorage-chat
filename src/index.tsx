import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import configureStore from './modules/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

const store = configureStore();
const TARGET_ROOT = document.getElementById('root');

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('message', JSON.stringify(state.messages));
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    TARGET_ROOT
)