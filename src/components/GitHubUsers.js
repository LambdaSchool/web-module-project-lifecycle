import React from "react";

export default class GitHubUsers extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <img width="600" src="https://tinyurl.com/89nxmnm8" alt="joker" />

        <h2>Login: {user.login}</h2>
        <h2>Name: {user.name}</h2>
        <h2>Location: {user.location}</h2>
        <h2>Followers: {user.followers}</h2>
        <h2>Following: {user.following}</h2>
      </div>
    );
  }
}
