import React, { Component } from 'react'

class UserCard extends Component {

    render() {
        return (
            <div key={this.props.github.id}>
                <h1>Username: {this.props.github.login}</h1>
                <img src={this.props.github.avatar_url} alt='avatar' />
                <p>Location: {this.props.github.location}</p>
                <p>Followers: {this.props.github.followers}</p>
                <p>Following: {this.props.github.following}</p>
                <p>Bio: {this.props.github.bio} </p>
            </div>
        )
    }
}

export default UserCard
