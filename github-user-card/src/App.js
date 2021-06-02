import axios from 'axios';
import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import UserFollowers from './components/UserFollowers';


class App extends React.Component {
  // Create state
  state = {
     users: {},
     followers: []
  }

  // Axios requests - API end points:
  // https://api.github.com/users/Vehmeyer
  // https://api.github.com/users/Vehmeyer/followers
  
  componentDidMount() {
    axios.get("https://api.github.com/users/vehmeyer")
      .then((res) => {
        console.log("res.data:", res.data);
        this.setState({
          users: res.data
        })
        axios.get("https://api.github.com/users/Vehmeyer/following")
          .then((res) => {
            console.log("following res.data:", res.data)
            this.setState({
              followers: res.data
            })
          })        
      })
      .catch(err => {
        console.log(err)
      })
  }

  // Create handler functions - not needed with current setup, but could add a click handler for clicking on a follower or following button
  // handleChange = e => {
  //   this.setState({
  //     users: e.target.value
  //   });
  // }

  // handleClick = e => {
  //   e.preventDefault();
  //   axios.get("https://api.github.com/users/Vehmeyer/followers")
  //     .then(res => {

  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  render() {
      console.log("users:", this.state.users);
      console.log("followers:", this.state.followers);

      return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Card</h1>
        </header>
        <div className="userContainer">
          <UserCard users={this.state.users}/>
        </div>
        <div className="userContainer">
          <UserFollowers followers={this.state.followers}/>
        </div>
      </div>
    );
  }
}

export default App;
