import React from 'react'

const UserCard = props => {

    const {userInfo} = props

    return (
        <div>
            <img src={userInfo.avatar_url} alt=''/>
            <div>
                <h1>
                    <a href={userInfo.html_url}>
                        {userInfo.login}
                    </a>
                </h1>
                <p>{userInfo.name}</p>
                <p>{userInfo.location}</p>
                <p>Public Repos: {userInfo.public_repos}</p>
                <p>Followers: {userInfo.followers}</p>
                <p>Following: {userInfo.following}</p>
            </div>
        </div>
    )

}

export default UserCard