import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
width:20%;
border:2px solid black;
margin:auto;
padding:1%;
img{
    width:50%;
}
`;


const UserCard = props =>{
    const {user, followers} = props;

    return(
        <StyledDiv className='userCard'>
            <img src={user.avatar_url} alt={user.login}/>
            <h2>Name: {user.name}</h2>
            <p>Login: {user.login}</p>
            <p>Bio: {user.bio}</p>
            <p>Blog: {user.blog}</p>
            <p>Location: {user.location}</p>
            <p>Following: {user.following}</p>
            <p>Followers: {user.followers}</p>
            <button onClick={() => 
            document.querySelector('.followersList').style.display === 'none' 
            ? document.querySelector('.followersList').style.display=''
            : document.querySelector('.followersList').style.display='none'}>Click!</button>
            <div className='followersList'>
            {followers.map(follower => {
                return (
                <div key={follower.id}>
                    <img src={follower.avatar_url} alt={follower.login}/>
                   <p>Login: {follower.login}</p> 
                </div>
            )
            })}
            </div>
        </StyledDiv>
    )
}


export default UserCard