import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                postTextChange={store.postTextChange.bind(store)}
                messageTextChange={store.messageTextChange.bind(store)}
                sentMessage={store.sentMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree()
store.subscribe(rerenderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
