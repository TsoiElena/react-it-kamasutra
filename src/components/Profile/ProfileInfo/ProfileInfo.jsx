import React from 'react'
import s from './ProfileInfo.module.scss'


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img className={s.previmg} src="https://www.ejin.ru/wp-content/uploads/2017/09/18-728.jpg" alt = "?" />
            </div>
            <div className={s.descriptionBlock}>
                AVA + DESCRIP
            </div>
        </div>
    )
}

export default ProfileInfo