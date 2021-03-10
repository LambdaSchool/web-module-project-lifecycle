import React from 'react';
import './Card.css';

const UserCard = (props) => {

    console.log(props)

    return (
        <div class='card'>
            <img src={props.User.avatar_url}/>
            <div>
                <h3>{props.User.name}</h3>
                <p>{props.User.login}</p>
                <p>Profile:
                    <a href={props.User.url}>{props.User.url}</a>
                </p>
                <p>Followers: {props.User.followers}</p>
                <p>Following: {props.User.following}</p>
                <p>Bio: {props.User.bio}</p>
            </div>
        </div>
    );
    

}

export default UserCard;