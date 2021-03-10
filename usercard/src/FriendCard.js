import React from 'react';
import './Card.css';

const FriendCard = (props) => {

    console.log(props.Friend)

    return (
        <div class='card'>
            <img src={props.Friend.avatar_url}/>
            <div>
                <h3>{props.Friend.name}</h3>
                <p>{props.Friend.login}</p>
                <p>Profile:
                    <a href={props.Friend.url}>{props.Friend.url}</a>
                </p>
            </div>
        </div>
    );
    

}

export default FriendCard;