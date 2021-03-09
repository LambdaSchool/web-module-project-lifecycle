import React, { Component } from "react";
import Followers from "./Followers";

class Usercard extends Component {
  render() {
    return (
      <div className="card .border-solid">
        <img className="rounded-full" src={this.props.avatar_url} alt="user" />
        <div className="card-info">
          <h3>{this.props.name}</h3>
          <p className="username">Username: {this.props.login}</p>
          <p>Location: {this.props.location}</p>
          <p>
            Profile:
            <a href={this.props.html_url}>{this.props.html_url}</a>
          </p>
          <p>Followers: {this.props.followers}</p>
          <p>Following: {this.props.following}</p>
          <p>Bio: {this.props.bio}</p>
        </div>
      </div>
    );
  }
}
export default Usercard;
