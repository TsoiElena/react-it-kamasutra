import axios from 'axios'
import {setAuthUserData, togalIsFetching} from "../redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'd827019b-7669-407b-b4ca-1fc3c919f47d'
    }
})

export default instance

export const usersAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(res => res.data)
    },
    getUser(id){return instance.get('/profile/' + id).then(res => res.data)},
}

export const userAPI = {
    follow(id){
        return instance.post(`/follow/${id}`, {}).then(res => res.data.resultCode )
    },
    unfollow(id){
        return instance.delete(`/follow/${id}`).then(res => res.data.resultCode )
    },
    auth(){
        return instance.get('/auth/me').then(res => res.data)
    }
}

export const profileAPI = {
    getStatus(id){
        return instance.get('/profile/status/' + id).then(res => res.data)
    },
    updateStatus(status){
        return instance.put('/profile/status', {status}).then(res => res.data.resultCode)
    }
}