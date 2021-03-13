import React from 'react';
import axios from 'axios';

class App extends React.Component {
constructor(){
  super();
  this.state = {
    userPic: '',
    followers: 0,
    id:''
  }
}

  componentDidMount() {
    // make an api call
    axios.get("https://api.github.com/users/bnm219")
      .then(res => {
        console.log(res.data.avatar_url)
        this.setState({
          ...this.state,
          userPic: res.data.avatar_url,
          followers: res.data.followers,
          id:res.data.id
        })
      })
      .catch(err => console.error('Error: ', err.message))
  }


  render() {
    return (<>
      <div>
       <img key={this.state.id} src={this.state.userPic} alt="user pic" />
       <p>{`Followers: ${this.state.followers}`}</p>
     </div>
    </>)
  }
}

export default App;
