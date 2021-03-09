import React from "react";
import "./App.css";
import Usercard from "./Usercard";
import axios from "axios";

class App extends React.Component {
  state = {
    userData: {},
    followersData: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ooladuwa")
      .then((res) => {
        this.setState({ userData: res.data });
        axios
          .get(res.data.followers_url)
          .then((res) => {
            this.setState({ followersData: res.data });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const { userData, followersData } = this.state;
    return (
      <div>
        <Usercard {...userData} />
        {followersData.map((data) => (
          <Usercard {...data} />
        ))}
      </div>
    );
  }
}
export default App;
