import React from 'react'
import Navigation from './components/Navigation/Navigation'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import News from './components/News/News'
import Music from './components/Music/Music'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Find-Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'> <DialogsContainer/> </Route>
                    <Route path='/profile/:userId?'> <ProfileContainer/> </Route>
                    <Route path='/news' > <News /> </Route>
                    <Route path='/music' > <Music /> </Route>
                    <Route path='/users' > <UsersContainer/> </Route>
                    <Route path='/login' > <Login/> </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
