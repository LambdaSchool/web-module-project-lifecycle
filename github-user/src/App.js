import React from 'react'
import axios from 'axios'
import User from './Components/User'
import FollowerCard from './Components/FollowerCard'
import './App.css';


  export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {},
      followers: [],
    }
  }
  componentDidMount() {//user
    axios
    .get('https://api.github.com/users/cynthia-coronado')
    .then(response => {
      this.setState({...this.state, user: response.data})
      console.log('User',response)
    })
    .catch(error => {
      console.log('User Error')
    })
  
  axios //follower
    .get('https://api.github.com/users/cynthia-coronado/followers')
    .then(response => {
      this.setState({...this.state, followers: response.data})
      console.log('Followers',response);
    })
    .catch(error => {
      console.log('Follower Error')
    })
 }

render() {
  return (
    <div className = 'appContainer'>
    <h1>Github</h1>
    <User user={this.state.user}/>
    {
      this.state.followers &&
      this.state.followers.map((follower) => {
      return <FollowerCard key={follower.id} follower={follower} />
    })
    }
    
    </div>
  )
 }
}
