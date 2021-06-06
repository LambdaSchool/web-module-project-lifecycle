import React from 'react';
import'./App.css';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {
    state = {
        user: 'jayesquivel',
        userInfo: {},
        followrs: []
    }
    
    getFollowers = () => {
        axios.get(`https://api.github.com/users/${this.state.user}/followers`)
        .then(res => {
            console.log ("res for followers", res)
            this.setState({
                followers: res.data
            })
        })
        .catch(err => {
            console.log("followers request failed", err);
        })
    }

    componentDidMount() {
        console.log("this is state:", this.state);

        axios.get(`https://api.github.com/users/${this.state.user}`)
        .then(res => {
            console.log("Success!");
            console.log("res.data:", res.data);
            this.setState({
                userInfo: res.data
            })
            console.log("this is the new state:", this.state);
            this.getFollowers
        })
        .catch(err => {
            console.log("that didn't work:", err);
        })
    }

    render() {
        return (
            <div className="App">
                <User info={this.state.userInfo}/>
                <FollowerList followers={this.state.followers}/>
            </div>
        )
    }
}