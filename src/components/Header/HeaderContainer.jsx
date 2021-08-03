import React, {useEffect} from "react";
import Header from "./Header";
import api, {userAPI} from "../../api";
import connect from "react-redux/lib/connect/connect";
import {setAuthUserData, togalIsFetching} from "../../redux/auth-reducer";

const HeaderContainer = ({setAuthUserData, isAuth, login}) =>{
    useEffect(() => {
        togalIsFetching(true)
        userAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                setAuthUserData(id, email, login)
            }
            togalIsFetching(false)
        })
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

export default connect(mapStateToProps, {setAuthUserData, togalIsFetching})(HeaderContainer)
