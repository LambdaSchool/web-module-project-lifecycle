import React from 'react';
import axios from 'axios';
import UserCard from "./UserCard"

class App extends React.Component {
  state = {
      followers: [],
      user: {},
      name: 'murraywarnock'
  }

  componentDidMount() {
      this.getData(this.state.name);
  }

  getData = (name) => {
    axios.get(`https://api.github.com/users/${name}`)
    .then(respUser=> { 
       axios.get(`https://api.github.com/users/${name}/followers`)
        .then(respFollowers=> {
            this.setState({
              name: name,
              user: respUser.data,
              followers: respFollowers.data
            });
        })
        .catch(err => {
            console.log("Axios error: ", err);
        });
    })
    .catch(err => {
        console.log(err);
    });
  }

  seeFollowers = (name) => {
    this.getData(name);
  }

  render() {
      return(
      <div className="App">
        <h1>{`Github data for ${this.state.user.name}`}</h1>
        <div className="card">
          <img src={`${this.state.user.avatar_url}`} alt=""/>
          <div>{this.state.user.name}</div>
          <h2>Followers</h2>
        </div>
        <div className="follower-container">
          <UserCard followers={this.state.followers}
                    seeFollowers={this.seeFollowers}/>
        </div>
      </div>);
  }
}

export default App;