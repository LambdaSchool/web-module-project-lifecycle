import React from 'react';
import axios from 'axios';
import './App.css';
import User from './components/User';
import Follower from './components/Followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'GitHub Network',
      user: {},
      followers: []
    }
  }

  componentDidMount(){
    //axios call for user info
    axios.get('https://api.github.com/users/MinaMonsi')
    .then(res => {
      console.log(res);
      this.setState({
        ...this.state,
        user: res.data
      })//happy path
    })
    .catch(err => console.log(err));//sad path

    //axios call for followers
  axios.get('https://api.github.com/users/MinaMonsi/followers')
  .then( res => {
    console.log(res);
    this.setState({
      ...this.state, 
      followers: res.data
    })
  })
  .catch(err => console.log(err))

  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
        </header>

        <div className='App-cards'>
        <User user ={this.state.user} />
      
        {this.state.followers.map(follower => {
          return <Follower key={follower.login + ' ' + follower.id } follower={follower}/>
          })}
        </div>
        
      </div>
    );

  }
}

export default App;
