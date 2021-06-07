import React, { Component } from 'react'
import UserCard from "./components/UserCard";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      github: {}
    }
  }

  componentDidMount() {
  axios.get(`https://api.github.com/users/danimalcrackrz`)
      .then((res => {
        this.setState({
          github: res.data
        })
        console.log(res.data)
      })) 
      .catch(err => {
        console.error(err);
      })
    }

  render() {
    return (
      <div>
        <UserCard github={this.state.github} />
      </div>
    )
  }
}

