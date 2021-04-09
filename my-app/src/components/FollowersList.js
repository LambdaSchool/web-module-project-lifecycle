import React, { Component } from "react";

export default class FollowersList extends Component {
  render() {
    console.log(this.props.followers);
    return (
      <>
        {this.props.followers.map((follower, index) => {
          return (
            <div key={index}>
              <img src={follower.avatar_url} alt="follower id" />
              <h4>Username: {follower.login}</h4>
              <button>
                <a href={`https://github.com/${follower.login}`}>GitHub</a>
              </button>
            </div>
          );
        })}
      </>
    );
  }
}
