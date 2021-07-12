import React, { Component } from "react";

export default class FollowerCard extends Component {
  render() {
    const { follower } = this.props;
    return (
      <div>
        <img src={follower.avatar_url} alt="follower avatar" />
        <p>{follower.login}</p>
        <p>{follower.name}</p>
      </div>
    );
  }
}
