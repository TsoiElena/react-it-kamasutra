import React from 'react'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import { Route, BrowserRouter } from "react-router-dom";
import './App.scss'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'> <DialogsContainer/> </Route>
                    <Route path='/profile'> <Profile/> </Route>
                    <Route path='/news' > <News /> </Route>
                    <Route path='/music' > <Music /> </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
