import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import CurrentUser from './components/CurrentUser'
import Followers from './components/Followers'


class App extends Component {
  state = {
    username: 'kishkuman13',
    user: null,
    followers: null
  }

  componentDidMount() {
    this.getUser(this.state.username);
    this.getFollowers(this.state.username);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      this.getUser(this.state.username);
      this.getFollowers(this.state.username);
    }
  }

  getUser = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      this.setState({user: response.data})
    })
    .catch(error => {
      console.log(error);
    });
  }

  getFollowers = (username) => {
    axios.get(`https://api.github.com/users/${username}/followers`)
    .then(response => {
      this.setState({followers: response.data});
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
        <img className="chart" src={`https://ghchart.rshah.org/409ba5/${this.state.username}`} alt={`${this.state.username}'s Blue Github Chart`} />
        {
          this.state.user &&
          <CurrentUser user={this.state.user} followers={this.state.followers} />
        }
        {
          this.state.followers &&
          <Followers followers={this.state.followers} />
        }
      </div>
    )
  }
}

export default App;
