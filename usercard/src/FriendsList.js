import React from 'react';
import FriendCard from './FriendCard';
import './App.css';

const FriendsList = (props) => {

    console.log(props)

    return (
        <div class = 'Frlist'>
            {props.Friends.map((item, index) => (
                <FriendCard Friend= {item} key= {index}/>
            ))}
        </div>
    );
    

}

export default FriendsList;