export interface User {
    id: number
    username: string
    avatar: string
    url: string
    location: string
    followers: Follower[]
}

export interface Follower {
    id: number
    username: string
    avatar: string
    url: string
}