import React, {useState} from "react";

const ProfileStatus = ({status}) => {
    let [mode, editMode] = useState(false)

    return (
        <>
            <div>
                { !mode ?
                    <div>
                        <span onDoubleClick={() => editMode(true)}>{status}</span>
                    </div>
                     : <div>
                        <input autoFocus={true} onBlur={() => editMode(false)} value={status}/>
                    </div>
                }
            </div>
        </>
    )
}

export default ProfileStatus
