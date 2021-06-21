import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {addPost, postTextChange} from "./redux/state";

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} postTextChange={postTextChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

