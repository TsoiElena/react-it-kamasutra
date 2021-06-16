import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, text: 'hi', likesCount: 11}, {id: 2, text: 'first post', likesCount: 1},
]

const dialogsData = [
    {id:1, name: 'Dima'},
    {id:2, name: 'Tima'},
    {id:3, name: 'Rima'},
    {id:4, name: 'Kira'},
    {id:5, name: 'Lena'},
    {id:6, name: 'Anna'},
    {id:7, name: 'Mahsa'},
]
const messagesData = [
    {id:1, text: 'Hi'},
    {id:2, text: 'How r u'},
    {id:3, text: 'fine'},
    {id:4, text: 'yo'},
    {id:5, text: 'yo'},
    {id:6, text: 'yo'},
    {id:7, text: 'yo'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
