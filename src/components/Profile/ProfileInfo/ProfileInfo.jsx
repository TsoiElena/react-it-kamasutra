import React from 'react'
import s from './ProfileInfo.module.scss'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = ({profile}) => {
    if (!profile) return <Preloader/>

    return (
        <div className={s.infoBlock}>
            <div><img className={s.previmg} src={profile.photos.large} alt="?"/></div>
            <div className={s.descriptionBlock}>
                <div>
                    <div className={s.main}>{profile.fullName}</div>
                    <div>{profile.aboutMe}</div>
                </div>
                <div>
                    <div className={s.main}>
                        Сведения о работе:
                        <span> {profile.lookingForAJob === true ? 'ищу работу' : 'не ищу работу'}</span>
                    </div>
                    <div className={s.main}>Комментарий: <span>{profile.lookingForAJobDescription}</span></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo