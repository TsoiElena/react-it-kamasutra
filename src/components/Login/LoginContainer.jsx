import React  from 'react'
import connect from "react-redux/lib/connect/connect";
import LoginForm from "./LoginForm";

const LoginContainer = ({userId, email, login}) => {

    return (
        <div >
            <LoginForm
                userId={userId}
                email={email}
                login={login}
            />
        </div>
    )
}

let mapStateToProps = (state) => ({
    userId: state.login.userId,
    email: state.login.userId,
    login: state.login.userId,
})

export default connect(mapStateToProps, {})(LoginContainer)