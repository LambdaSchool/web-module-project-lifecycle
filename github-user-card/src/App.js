import React from "react";
import axios from "axios";
import Card from "./Card";
import FollowerCard from "./FollowerCard";

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      users: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/cbarcinas").then(
      (res) => {
        this.setState({ ...this.state, users: res.data });
      },
      (err) => {
        console.log(err);
      }
    );

    axios.get("https://api.github.com/users/cbarcinas/followers").then(
      (res) => {
        this.setState({ ...this.state, followers: res.data });
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div>
        <Card users={this.state.users} />
        {/* checking state to see if followers exist and if 
        there is data to be mapped through. If both are true
        return a Follower Card component with given props passed as params */}
        {this.state.followers &&
          this.state.followers.map((follower) => {
            return <FollowerCard key={follower.id} follower={follower} />;
          })}
      </div>
    );
  }
}
