import './App.css';
import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  state ={
    myStuff:{},
    followersStuff:[]
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/CrashOverride1987')
    .then(res => {
      console.log(res)
     this.setState({
       myStuff:res.data
     })
    })
    .catch(error => {console.log(error)})

    Axios.get('https://api.github.com/users/CrashOverride1987/followers')
    .then(res => {
      console.log(res)
     this.setState({
       followersStuff:res.data
     })
    })
    .catch(error => {console.log(error)})
  }
  render() {
  return (
    <div>
    <header>
    {this.state.myStuff.name}
    <div>{this.state.myStuff.login}</div>
    <div>Number of followers: {this.state.myStuff.followers}</div>
    <div>Number of people following: {this.state.myStuff.following}</div>
    {this.state.followersStuff.map(item => {
      console.log(item)
      return (
        <p>{item.login}</p>
        )
      })}
      </header>
    </div>
    );
  }
}
export default App;
