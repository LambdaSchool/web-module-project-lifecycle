import "./App.css";
import React, { Component } from "react";
//import Axios from "axios";

//component
import AddUserForm from "./components/AddUserForm";
import UserCard from "./components/UserCard";
import FollowersList from "./components/FollowersList";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "Alkibijad",
      gitHub: {},
      followers: [],
      inputValue: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.username !== this.state.username) {
      console.log(this.state.userList);
      this.fetchUsers();
    }
  }

  fetchUsers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((response) => {
        this.setState({
          gitUser: response.data,
        });
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((response) => {
        this.setState({
          followers: response.data,
        });
      });
  };

  addUser = (user) => {
    const newUser = user;
    this.setState({
      username: newUser,
    });
  };

  render() {
    return (
      <div>
        <h1>React Lifecycle GitHub UserCard</h1>
        <div>
          <AddUserForm addUser={this.addUser} />
        </div>
        <div>
          <UserCard {...this.state.gitUser} />
        </div>
        <div>
          <FollowersList followers={this.state.followers} />
        </div>
      </div>
    );
  }
}
