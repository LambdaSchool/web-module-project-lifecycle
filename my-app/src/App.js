import React from "react";
import "./App.css";
import UserCard from "./userCard";
import axios from "axios";
const user = "john-laubscher";

class App extends React.Component {
  state = {
    userInfo: {},
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((resp) => {
        console.log(resp);
        this.setState({
          userInfo: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      followers: [],
    });
    axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then((resp) => {
        console.log("followers axios data", resp);
        this.setState({
          followers: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Heres the App</h1>
        <UserCard
          userInfo={this.state.userInfo}
          user={user}
          followers={this.state.followers}
        />
      </div>
    );
  }
}
export default App;
