import React, {useEffect} from "react";
import Header from "./Header";
import api from "../../api";
import connect from "react-redux/lib/connect/connect";
import {setAuthUserData} from "../../redux/auth-reducer";

const HeaderContainer = ({setAuthUserData, isAuth, login}) =>{
    useEffect(() => {
        api.get('/auth/me', {withCredentials: true}).then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                setAuthUserData(id, email, login)
            }
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
