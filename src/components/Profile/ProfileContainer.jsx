import React, {useEffect} from 'react'
import Profile from './Profile'
import {getUserThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from '../../redux/profile-reducer'
import connect from "react-redux/lib/connect/connect";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {compose} from "redux";

const ProfileContainer = ({posts, status, newPostText, dispatch, profile, match, getUserThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}) => {

    useEffect(() => {
        let userId
        match.params.userId ? userId = match.params.userId : userId = 18776
        getUserThunkCreator(userId)
        getStatusThunkCreator(userId)
    }, [])

    return (
        <div >
            <Profile
                posts={posts}
                newPostText={newPostText}
                status={status}
                dispatch={dispatch}
                profile={profile}
                updateStatus={updateStatusThunkCreator}
            />
        </div>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)