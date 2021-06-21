import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'
import {addPost} from './redux/state'
import {rerenderTree} from "./render";


rerenderTree(state, addPost)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
