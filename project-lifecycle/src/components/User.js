import React, { Component } from 'react'

class User extends Component {
  state = { 
}

render() { 
    return ( 
        <div className="card">
            <div className="card-header">
                <div className="card-info">
                    <div className="card-image">
                        <img src={this.props.user.avatar_url} alt="Profile photo" />
                    </div>
                    <div className="card-details">
                        <h2>{this.props.user.login}</h2>
                        <p>{this.props.user.location}</p>
                        {
                            this.props.user.followers !== undefined && parseInt(this.props.user.followers) > 0 &&
                            <p><span>Followers: {this.props.user.followers}</span> | <span>Following: {this.props.user.following}</span></p>
                        }
                        <a href={this.props.user.html_url} target="_BLANK">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default User;

