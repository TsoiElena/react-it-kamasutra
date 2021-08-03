import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUsersReducer from "./findUsers-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: findUsersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
