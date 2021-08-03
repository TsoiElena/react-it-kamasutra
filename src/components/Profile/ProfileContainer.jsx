import React, {useEffect} from 'react'
import Profile from './Profile'
import {getUserThunkCreator} from '../../redux/profile-reducer'
import connect from "react-redux/lib/connect/connect";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../HOC/AuthRedirect";

const ProfileContainer = ({posts, newPostText, dispatch, profile, match, getUserThunkCreator}) => {

    useEffect(() => {
        let userId
        match.params.userId ? userId = match.params.userId : userId = 22
        getUserThunkCreator(userId)
    }, [])

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let withURLCOMP = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserThunkCreator}) (withURLCOMP)