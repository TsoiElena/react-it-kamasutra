import React, {useEffect} from 'react'
import Profile from './Profile'
import api from '../../api'
import {setUserProfile} from '../../redux/profile-reducer'
import connect from "react-redux/lib/connect/connect";

const ProfileContainer = ({posts, newPostText, dispatch, profile, setUserProfile}) => {

    useEffect(() => {
        api.get('/profile/2').then(res => {
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

export default connect(mapStateToProps, {
    setUserProfile,
}) (ProfileContainer)