import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './Usercard';
import FriendsList from './FriendsList';

const user = []

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      user: user,
      friends: [],
    };
  }

  getUser = () => {
    axios.get('https://api.github.com/users/jasoncorchado')
    .then( (res) => {
      console.log(res.data);
      this.setState({user: res.data});
    })
    .catch(err => {
      console.log(err); 
    }) 
  } 
  
  getFriends = () => {
    axios.get('https://api.github.com/users/jasoncorchado/followers')
    .then( (res) => {
      console.log(res.data);
      this.setState({friends: res.data});
    })
    .catch(err => {
      console.log(err); 
    }) 
  } 
    
  componentDidMount() {this.getUser();
    this.getFriends()
  }

  render() {
    
    return (
      <div class='main'>
        <h1>Git Users</h1>
        <UserCard User={this.state.user} />
        <FriendsList Friends={this.state.friends} />
      </div>
    );

  }
}

export default App;
