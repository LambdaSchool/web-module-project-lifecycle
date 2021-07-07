import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import Followers from './components/Followers'


class App extends React.Component {
  
  state = {
    user: 'AnthonyMillerGit',
    userInfo: [],
    followersArray: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
        .then(res => {
          console.log(res.data)
            this.setState({
                userInfo: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
        .then(res => {
          console.log(res.data)
          const followers = []
          res.data.forEach(e => {
            followers.push(e.login)
          })
          this.setState({followersArray: followers})
          console.log(this.state.followersArray)
        })
        .catch(err => {
          console.log(err)
        })
}


  render() {
  return (
    <div className="App">
      <h1>Github Card</h1>
      <div>
        <UserCard userInfo={this.state.userInfo}/>
        <Followers followersArray={this.state.followersArray}/>
      </div>
    </div>
  );
  }
}

export default App;
