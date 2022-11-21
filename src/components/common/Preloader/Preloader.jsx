import React from 'react'
import loading from "../../../assets/images/37.gif";

const Preloader = () => {

    return (
        <div style={{display: 'flex', justifyContent:"center", alignItems: "center", width:'100%'}}>
            <img src={loading} className={{backgroundColor: null}} alt=''
                 style = {{height: '64px', width:'64px'}}
            />
        </div>
    )
}

export default Preloader
