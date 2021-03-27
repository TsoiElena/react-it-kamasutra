import React from 'react'
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import './App.css'


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App;
