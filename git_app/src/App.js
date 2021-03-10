import React from 'react'
import Form from './Components/Form'
import Friends from './Components/Friends'
import UserCard from './Components/UserCard'
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state = {
    userData: [],
    friendsData: [],
    isOpen: false,
  }

  componentDidMount(){
    axios.all([
      axios.get("https://api.github.com/users/l-steinmacher"),
      axios.get("https://api.github.com/users/L-Steinmacher/followers"),
    ])
    .then(axios.spread((user, friends) => {
      console.log(user, friends)
      this.setState({
        userData: user.data,
      friendsData: friends.data,
      })
    }))
  }

  toggle = () => this.setState(prevState =>({isOpen: !prevState.isOpen}));
    
  render() {

    return(
      <div className='container'>
        <div className='userCardDiv'>
          <UserCard  userData={this.state.userData} isOpen={this.state.isOpen} toggle={this.toggle} />
        </div>
        <div className='formContainer'>
          <Form />
        </div>
        <div className='friendContainer'>
          <Friends friendsData={this.state.friendsData} isOpen={this.state.isOpen} toggle={this.toggle} />
        </div>
      </div>
    )
  }
}

export default App;
