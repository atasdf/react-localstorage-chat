import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import configureStore from './modules/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

const store = configureStore();
const TARGET_ROOT = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    TARGET_ROOT
)