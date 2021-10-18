import React, {useState} from "react";
import s from './style.module.scss'

const LoginForm = ({userId, email, login}) => {
    const [currentlogin, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const handleSubmit = () => {

    }

    const handleCheckbox = () => {
        if (!checkbox) {
            setCheckbox(true)
            document.cookie = `userId=${userId}; email=${email}; login=${login}`
        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input  required className={s.box} type="text" placeholder={'Login'} value={currentlogin} onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div>
                    <input  required className={s.box} type={'password'} placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type={"checkbox"} value={checkbox} onChange={() => handleCheckbox()}/> remember me
                </div>
                <div>
                    <button className={s.box} type='submit'> log in </button>
                </div>
            </form>
    )
}

export default LoginForm
