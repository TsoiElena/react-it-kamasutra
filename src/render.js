import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {addPost, messageTextChange, postTextChange, sentMessage} from "./redux/state";

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                postTextChange={postTextChange}
                messageTextChange={messageTextChange}
                sentMessage={sentMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

