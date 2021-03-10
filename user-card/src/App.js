import React from 'react'
import './App.css';
import UserCard from './Component/UserCard'
import axios from 'axios'

class App extends React.Component{
    state = {
      user: [],
      userInput: "",
    }

    componentDidMount(){
      axios.get(`https://api.github.com/users/monicascz`)
        .then((resp)=>{
          // console.log(resp.data)
          this.setState({
            user: resp.data,
          })
        })
        .catch((err)=>{
          console.log('ComponentDidMount Error', err)
        })
    }

    handleChange= (e)=>{
      this.setState({
        userInput: e.target.value
      })
    }

    onSubmit = (e) => {
      e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.userInput}`)
        .then((resp)=>{
            this.setState({
              user: resp.data
            })
        })
        .catch((err)=>{
          console.log("onSubmit Error:", err)
        })
    }

  render(){
    return(
      <>
        <h1>Git Hub User Card</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange}></input>
          <button>Find My Card</button>
        </form>
        <UserCard user={this.state.user}/>
      </>
    )
  }
}
export default App;
