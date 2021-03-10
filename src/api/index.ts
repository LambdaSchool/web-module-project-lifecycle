import axios from 'axios'

import { Follower, User } from '../models/User.model'

export const BASE_URL = 'https://api.github.com/users'

const getFollowers = async (username: string) => {
    try {
        const res = await axios.get(`${BASE_URL}/${username}/followers`) 
        const followers = res.data.map((fo: any)=> {
            const follower: Follower = {
                username: fo.login,
                id: fo.id,
                url: fo.html_url,
                avatar: fo.avatar_url
            }
            return follower
        })
        return followers
    } catch (err) {
        throw err
    }
}

export const getUser = async (username: string): Promise<User> => {
    try {
        const response = await axios.get(`${BASE_URL}/${username}`)
        const { login, avatar_url, id, html_url, location } = response.data
        const user: User = {
            id,
            username: login,
            avatar: avatar_url,
            url: html_url,
            followers: [],
            location
        }

        const followers = await getFollowers(username)
        user.followers = followers
        return user
    } catch (err) {
        throw err
    }
}