import React, { Component } from "react";

class FollowerCard extends Component {
    
render() {
    const { follower } = this.props;
    return (
<div>
    <img src={follower.avatar_url} alt="follower avatar" />
    <p>{follower.login}</p>
    <p>{follower.name}</p>
</div>
);}}
export default FollowerCard