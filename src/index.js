import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./StoreContext";

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider value={store}>
            <App
                /*state={store.getState()}
                dispatch={store.dispatch.bind(store)}*/
            />
            </Provider>
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
