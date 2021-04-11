import React, { Component } from 'react'
import axios from 'axios'

export class Followers extends Component {
    constructor(){
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/iam-saeed/followers')
        .then(res => {this.setState({...this.state, followers: res.data })})
    }

    render() {
        return (
            <div>
                <h2>Followers</h2>
                <div className='followers'>
                <ul>{this.state.followers.map(followers => <li>{followers.login}</li>)}</ul>
                </div>
            </div>
        )
    }
}

export default Followers
