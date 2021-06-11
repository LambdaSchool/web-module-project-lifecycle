import React from 'react';
import axios from 'axios';

class Followers extends React.Component{
    state = {
        followers:[]
    }

    componentDidMount(){
        axios
            .get("https://api.github.com/users/dustinmyers/followers")
            .then((res) =>{
                this.setState({
                    followers:res.data,
                });
            })
            .catch((err) => console.log(err));
    }
    render(){
        const {followers} = this.state;
        if(followers.length === 0 ) return <p>Loading...</p>
        return (
        <div className="followers-box">
            {followers.map((follower) => (
                <div className="follower-card" key={follower.id}>
                    <img
                        style={{width: "60px", borderRadius: "50%"}}
                        src={follower.avatar_url}
                        alt={follower.login}
                    />
                    <h4>{follower.login}</h4>
                </div>
            ))}

        </div>
    )}
}

export default Followers;