import React from 'react'

export default function DisplayData(props) {
    const { gitHubData, followers } = props;
    
    return (
        <div className="displayData">
            <h1>Github User</h1>
            <img src={gitHubData.avatar_url} alt='' />
            <div className="name">Name: {gitHubData.name}</div>
            <div className="name">Username: {gitHubData.login}</div>
            <div className="name">Location: {gitHubData.location}</div>
            <div className="name">Bio: {gitHubData.bio}</div>
            <div className="name">Following: {gitHubData.following}</div>

            {followers && followers.map(follows => {
                return (
                <>
                <h2>Followers</h2>
                <img src={follows.avatar_url} alt='' />
                <div className="name">Name: {follows.name}</div>
                <div className="name">Username: {follows.login}</div>
                <div className="name">Location: {follows.location}</div>
                <div className="name">Bio: {follows.bio}</div>
                <div className="name">Following: {follows.following}</div>
                </>
            )})}
         </div>)
}