import React from "react";

export default class Followers extends React.Component {
  render() {
    const { followers } = this.props;
    return (
      <div>
        {followers.map((user) => {
          return (
            <div className="follow">
              <img src={user.avatar_url} alt="avatar" />
              <h3>Login: {user.login}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
