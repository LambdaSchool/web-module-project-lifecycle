import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="intro">
                <img className="myImg"src={this.props.avatar_url} alt="users"/>
                <h2>{this.props.login}</h2>
                <p> {this.props.location}</p>
                <a className="link" href={this.props.html_url}>{this.props.html_url}</a>
              
                </div>
                <div className="bio">
                {/* <p>Followers: {this.props.followers}</p>
                <p>Following: {this.props.following}</p>     
                <p>Bio: {this.props.bio}</p>          */}
                </div>
            </div>
        );
    }
}

export default UserCard;