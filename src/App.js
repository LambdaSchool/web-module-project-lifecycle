import axios from 'axios';
import React from 'react';
import './App.css';
import UserCard from './UserCard';



// let me push godDamnitttt!!!!
class App extends React.Component {
  state= {
    userData: {},
    followers: [],
  }

    componentDidMount() {
      axios
      .get("https://api.github.com/users/Tasnimzalom")
      .then(response => {
        this.setState({ userData: response.data })
        axios.get(response.data.followers_url).then(response => {
          this.setState({ followers: response.data })
        })
          .catch(error => console.log(error.message))
      })
      .catch(error => console.log(error.message))
    }

    componentDidUpdate(){
      console.log("sup")
    }

  render() {
    const {userData, followers} = this.state


  return(
  <div>
  <div className="header">
      <h1>Github Kitties</h1>
      </div>
    <div className="App">
      <div className="grid">
      <UserCard {...userData}/>

      {followers.map((data)=>(
        <UserCard {...data}/>
      ))}
      </div>
      
      
    </div>
    </div>
  )
}}

export default App;
