import React, {useEffect} from 'react'
import Profile from './Profile'
import api from '../../api'
import {setUserProfile} from '../../redux/profile-reducer'
import connect from "react-redux/lib/connect/connect";
import withRouter from "react-router-dom/es/withRouter";

const ProfileContainer = ({posts, newPostText, dispatch, profile, setUserProfile, match}) => {

    useEffect(() => {
        let userId
        match.params.userId ? userId = match.params.userId : userId = 22
        api.get('/profile/' + userId).then(res => {
            setUserProfile(res.data)

        })
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withURLCOMP = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
}) (withURLCOMP)