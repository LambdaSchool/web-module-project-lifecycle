import React from "react";

class UserCard extends React.Component {
  render() {
    // const { userInfo } = this.props.userInfo;
    console.log("props followers", this.props);

    return (
      <div>
        <h1>User Info:</h1>
        <h4>Name: {this.props.userInfo.name}</h4>
        <p>Bio: {this.props.userInfo.bio}</p>
        <p>Github page: {this.props.userInfo.html_url}</p>
        <p>Location: {this.props.userInfo.location}</p>
        <br></br>
        <div>
          <h2>User's Followers: </h2>
          {/* {this.props.followers.map((element, index) => (
            <h4>Username: {this.props.followers[index].login}</h4>
          ))}
          <p>Bio: {this.props.followers[0].bio}</p>
          <p>Github page: {this.props.followers[0].html_url}</p>
          <p>Location: {this.props.followers[0].location}</p> */}
        </div>
      </div>
    );
  }
}

export default UserCard;
