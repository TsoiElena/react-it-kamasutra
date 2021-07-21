import React from 'react';
import './index.scss';
import store from './redux/redux-store'
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "react-redux/lib/components/Provider";

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider value={store}>
            <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree()
store.subscribe(rerenderTree)

