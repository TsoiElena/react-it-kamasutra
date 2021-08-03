import React, {useEffect} from 'react'
import Profile from './Profile'
import {getUserThunkCreator} from '../../redux/profile-reducer'
import connect from "react-redux/lib/connect/connect";
import withRouter from "react-router-dom/es/withRouter";
import Redirect from "react-router-dom/es/Redirect";

const ProfileContainer = ({posts, newPostText, isAuth, dispatch, profile, match, getUserThunkCreator}) => {

    useEffect(() => {
        let userId
        match.params.userId ? userId = match.params.userId : userId = 22
        getUserThunkCreator(userId)
    }, [])

    if (!isAuth) return <Redirect to={'login'}/>

    return (
        <div >
            <Profile
                posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}
                profile={profile}
            />
        </div>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withURLCOMP = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserThunkCreator}) (withURLCOMP)