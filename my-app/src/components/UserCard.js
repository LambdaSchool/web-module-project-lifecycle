import React, { Component } from "react";
import styled from "styled-components";

class UserCard extends Component {
  render() {
    return (
      <Card className="card">
        <h2>{this.props.user.username}</h2>
        <hr />
        <img src={this.props.user.avatar_url} alt="profile_image" />
        <div className="bio">{`"${this.props.user.bio}"`}</div>
        <div className="followers">{`Followers: ${this.props.user.followers}`}</div>
      </Card>
    );
  }
}

export default UserCard;

const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
  padding: 1em 2em;
  border-radius: 1em;

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    );
    width: 200px;
    margin-bottom: 1em;
  }

  img {
    width: 200px;
    border-radius: 50%;
    margin-bottom: 2em;
  }

  h2 {
    margin: 0;
  }
`;
