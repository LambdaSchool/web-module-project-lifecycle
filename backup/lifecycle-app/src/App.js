import React from "react";
import UserForm from './components/Form'
import Card from './components/Card'
import Fcard from './components/Fcard'
import axios from 'axios';

import './index.css';


export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        users: {},
        followers: [],
      };
    }
  
    componentDidMount() {
      axios
        .get("https://api.github.com/users/Stan2dor")
        .then((res) => {
          this.setState({ ...this.state, users: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
  
      axios
        .get("https://api.github.com/users/Stan2dor/followers")
        .then((res) => {
          this.setState({ ...this.state, followers: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    render() {
      return (
        <div>
          <Card users={this.state.users} />
          {this.state.followers &&
            this.state.followers.map((follower) => {
              return <Fcard key={follower.id} follower={follower} />;
            })}
          <UserForm addTask={this.addTask} completeTask={this.completeTask}/>

        </div>
      );
    }
  };
