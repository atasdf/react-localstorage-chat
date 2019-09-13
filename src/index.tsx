import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';


const TARGET_ROOT = document.getElementById('root');

render(
    <App/>,
    TARGET_ROOT
)