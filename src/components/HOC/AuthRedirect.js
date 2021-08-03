import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import connect from "react-redux/lib/connect/connect";


let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={'login'}/>
        return <Component {...props}/>
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}
