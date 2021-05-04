import React from 'react'

const UserCard = props => {
    return (
        <div>
            <img src={props.user.avatar_url} alt={props.user.avatar_url}/>
            <p>{props.user.login}</p>
        </div>
    )
}

export default UserCard