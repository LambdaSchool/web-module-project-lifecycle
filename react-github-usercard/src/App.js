import React from 'react';
import axios from 'axios';
import './App.css';

import UsercardList from './Components/UsercardList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [ {
        name: [],
        avatar_url: [],
        followers: [],
        following: [],
      }]
    }
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/wzd200')
      .then(res => {
        this.setState({
          users: res.data
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    }

  render() {
    return (
      <div className="App">
       <h1>
         Welcome to the Github Usercard Application
        </h1>
        <UsercardList 
          users={this.state.users} 
        />
      </div>
    )
  }

}

export default App;
