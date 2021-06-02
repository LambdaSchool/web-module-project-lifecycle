import React from 'react';

const UserCard = props => {
    return(
        <div>
            <div className="card">
                <img src={props.users.avatar_url} />
                <h3 className="name">{props.users.name}</h3>
                <p className="username">Username: {props.users.login}</p>
                <p>{props.users.location}</p>
                <p>Followers: {props.users.followers}</p>
                <p>Following: {props.users.following}</p>
                <p>{props.users.bio}</p>
            </div>
        </div>
    )
}

export default UserCard;