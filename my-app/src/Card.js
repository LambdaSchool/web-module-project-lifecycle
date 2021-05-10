import React from "react";
 class Card extends React.Component {
  componentDidMount() {
    console.log("card component mounted");
  }

render() {
    const { users } = this.props;
    console.log(users);
    return (
<div>
    <div className="image-container">
    <img alt="user avatar" src={users.avatar_url} />
</div>
    <div className="user-info">
        <h3>{users.name}</h3>
        <p>Login: {users.login}</p>
        <p>Followers: {users.followers}</p>
        <p>Following: {users.following}</p>
</div>
</div>
);}}
export default Card