import React from "react";
import LoginForm from "./LoginForm";
import s from './style.module.scss'
import LoginContainer from "./LoginContainer";

const Login = () => {

    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginContainer/>
        </div>
    )
}

export default Login
