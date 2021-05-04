import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';



import Userdata from "./UserData"


let url ="https://api.github.com/users/";
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

class App extends React.Component {
  state ={
    user: [],
    followers: [],
    followerName:[]
}
componentDidMount(){
  axios.get("https://api.github.com/users/ricardo-pena")
  .then(res =>{
     
     this.setState({
         user: res.data
     })
  

  })
  .catch(err => {
      console.log(err);
  })

  axios.get("https://api.github.com/users/ricardo-pena/followers")
  .then(res =>{
     
      this.setState({
          followers: res.data,
          
      })
      const top = this.state.followers[0]['login'];
      this.setState({
        followerName : top
      })
    

  })
}
  render(){

    return (
    <div className="App">
     <Userdata user = {this.state.user} follower = {this.state.followerName}/>
     <h2>Top Follower:</h2>
     <p>{this.state.followerName}</p>
   
    </div>
  );
}
}

export default App;
