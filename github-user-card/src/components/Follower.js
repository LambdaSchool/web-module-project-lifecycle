import React from 'react';

class Follower extends React.Component {
    render() {
        const { follower } = this.props;
        console.log("follower data:", follower)

        return(
            <div> 
                <div className="card">
                    <div>
                        <img src={follower.avatar_url} />
                    </div>
                    <div className="username">
                        <p>Username: {follower.login}</p>
                    </div>
                    {/* the following data below doesn't appear to be accessible through GH API for the users I'm following*/}
                    {/* <div className="name">
                        <h2>{follower.name}</h2>
                    </div> */}
                    {/* <p>{follower.location}</p>
                    <p>Followers: {follower.followers}</p>
                    <p>Following: {follower.following}</p>
                    <p>{follower.bio}</p> */}
                </div>
            </div>
        )
    }

}

export default Follower;