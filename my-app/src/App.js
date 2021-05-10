import React from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";
import Card from "./Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      followers: [],
};}

componentDidMount() {
  axios
  .get("https://api.github.com/users/SpacelessTime")
    .then((res) => {
      this.setState({ ...this.state, users: res.data });
})
    .catch((err) => {
    console.log(err);
});

axios
  .get("https://api.github.com/users/SpacelessTime/followers")
  .then((res) => {
   this.setState({ ...this.state, followers: res.data });
})
    .catch((err) => {
     console.log(err);
});}

render() {
  return (
  <div>
    <Card users={this.state.users} />
      {this.state.followers &&
         this.state.followers.map((follower) => {
         return <FollowerCard key={follower.id} follower={follower} />;
  })}
</div>
);
}}
export default App