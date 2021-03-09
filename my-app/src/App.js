import React, { Component } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { user: {} };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/djcri")
      .then((res) => {
        const data = res.data;
        const user = {
          username: data.login,
          avatar_url: data.avatar_url,
          bio: data.bio,
          followers: data.followers,
          id: data.id,
        };
        this.setState({ user: user });
        console.log(this.state.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.user && <UserCard user={this.state.user} />}
      </div>
    );
  }
}

export default App;
