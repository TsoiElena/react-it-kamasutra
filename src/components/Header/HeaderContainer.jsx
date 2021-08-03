import React, {useEffect} from "react";
import Header from "./Header";
import connect from "react-redux/lib/connect/connect";
import {authThunkCreator} from "../../redux/auth-reducer";

const HeaderContainer = ({isAuth, login, authThunkCreator}) =>{
    useEffect(() => {
        authThunkCreator()
        }, [])
    return (
        <Header
            isAuth={isAuth}
            login={login}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {authThunkCreator})(HeaderContainer)
