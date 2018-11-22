import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'

import store from './store/index'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

