import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'Content-Type': 'application/json',
        'API-KEY': '239461aa-c079-4acf-8b7b-2c032d611434'
    }
})

export default instance