import React, {useState} from "react";
import s from './ProfileInfo.module.scss'

const ProfileStatus = ({status, updateStatus}) => {
    let [mode, editMode] = useState(false)
    let [currentStatus, changeStatus] = useState(status)

    const handleStatus = (e) => {
        e.preventDefault()
        updateStatus(currentStatus)
        editMode(false)
    }

    return (
        <>
            <div>
                { !mode ?
                    <div>
                        <span onDoubleClick={() => editMode(true)}>{status? status : 'no status'}</span>
                    </div>
                     : <div className={s.status}>
                        <input autoFocus={true} onBlur={(e) => handleStatus(e)} value={currentStatus} onChange={e => changeStatus(e.currentTarget.value)}/>
                    </div>
                }
            </div>
        </>
    )
}

export default ProfileStatus
