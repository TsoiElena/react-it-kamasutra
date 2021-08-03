import axios from 'axios'
import {setAuthUserData, togalIsFetching} from "../redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'b7f772d8-401e-4bc3-9849-17bc7d8a998a'
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
