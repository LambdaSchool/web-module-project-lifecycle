
import './App.css';
import axios from 'axios'
import React from 'react';
import GithubCard from './components/GithubCard'
import Followers from './components/Followers'
import SearchUser from './components/SearchUser'
import { Avatar, Card } from '@material-ui/core';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: []
    }
  }

  handleChange = (e) => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })
}

  componentDidMount(){
    axios.get('https://api.github.com/users/iam-saeed')
    .then(res => {
      console.log(res.data)
      this.setState({
        ...this.state,
        user: res.data
      })
    })
    
    .catch(error => {
      console.log(error)
    })
  }

  

  render(){
    return (
      <>
      <div className="App">
        <div className='header-search'>
          <h1>Search A User</h1>
        <SearchUser />
        </div>
        <div className='avatar'>
        <Avatar img src={this.state.user.avatar_url} />
        </div>
        <h3>{this.state.user.login}</h3>
        <p><strong>Full Name: </strong>{this.state.user.name}</p>
        <p><strong>Location: </strong>{this.state.user.location}</p>
        <p><strong>Company Name: </strong>{this.state.user.company}</p>
        <p><strong>Followers: </strong>{this.state.user.followers}</p>
        <p><strong>Following: </strong>{this.state.user.following}</p>
      </div>
      <div>
        <Followers />
      </div>
      </>
    );
  }
}

export default App;
