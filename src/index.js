import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import Store from './Store.js'
import { Provider } from 'react-redux'

import './index.css';

import Home from './Containers/Home/Home';
import Chat from './Containers/Chat/Chat';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <div>
                <ul id="menu">
                    {/* <li><NavLink exact to="/">Home</NavLink></li> */}
                    <li><NavLink to="/">Chat</NavLink></li>
                </ul>

                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/" component={Chat} />
            </div>
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));
