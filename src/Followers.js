import axios from "axios";
import React, { Component } from "react";

class Followers extends Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ooladuwa/followers")
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // const { followers } = this.state;

    return (
      <div>
        {this.state.followers.map((follower) => {
          return (
            <div>
              <img src="{this.props.follower.avatar_url}" alt="follower" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Followers;
