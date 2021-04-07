import React from 'react';

const UserCard = props => {
    const {userData} = props

    return(
        <div>
            <img src={userData.avatar_url}/>
            <a href={userData.html_url}>{userData.login}</a>
            <h3> {userData.name}</h3>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
        </div>
    )

}

export default UserCard