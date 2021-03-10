import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      user:[],
      followers:[],
    }
  }



  componentDidMount(){
    axios
    .all([
     axios.get(`https://api.github.com/users/aleksandr-ardanov`),
     axios.get(`https://api.github.com/users/aleksandr-ardanov/followers`),
    ])
    .then(
      axios.spread((res1,res2) => {
      console.log(res1, res2)
      this.setState({user: res1.data, followers: res2.data});
      }
    ))
    .catch(err => {
      console.log(err)
    })
  }



  render(){
    return (
      <div className="App">
        <UserCard user={this.state.user} followers={this.state.followers}/>
    </div>
    );
  }
}

export default App;
