import axios from 'axios';
import React, { Component } from 'react'

 class User extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        axios.get("https://api.github.com/users/TyrannicalNoob")
        .then(res=> console.log(res))
        .catch(err => console.log(err));
        this.setState({
            user: res.data,
        });
    }

    render() {
        const {user} = this.state;
        if(!this.state.user) return <p>Loading data...</p>
        return (
            <div>
                <img style= {{ width: "150px" , borderRadius: "50%"}}
                src={user.avatar_url} 
                alt={user.name} />
                <h3>{user.name}</h3>
                <p>username: {user.login}</p>
                <p>repos: {user.public_repos}</p>
            </div>
        )
    }
}
export default User;