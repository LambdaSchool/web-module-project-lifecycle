import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import Followers from './Components/Followers';

class App extends React.Component {

  state = {
    user: "rickyklusmeier",
    userData: [],
    followersArr: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
        .then(res => {
          this.setState({
            userData: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })

        axios.get(`https://api.github.com/users/${this.state.user}/followers`)
          .then(res => {
            const followers = []
            res.data.forEach(evt => {
              followers.push(evt.login)
            })
            this.setState({followersArr: followers})
          })
          .catch(err => {
            console.log(err)
          })
  }

  render() {
    if(this.state.userData.length === 0) {
      return <h3> Please wait</h3>
    }
  return (
    <div className="App">
      {this.state.userData.length === 0 ? <h3> Please wait while we load your cards </h3> : <UserCard userData={this.state.userData}/>}
      <Followers followersArr={this.state.followersArr}/>
    </div>
  );
}
}

export default App;
