import React from 'react'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import './App.scss'
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = ({posts, dialogsData, messagesData}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'> <Dialogs dialogsData={dialogsData} messagesData={messagesData}/> </Route>
                    <Route path='/profile'> <Profile posts={posts}/> </Route>
                    <Route path='/news' > <News /> </Route>
                    <Route path='/music' > <Music /> </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
