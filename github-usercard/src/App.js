import React, { Component } from 'react';
import UserProfile from './components/UserProfile';
import UserForm from './components/UserForm';
import Following from './components/Following';

class App extends Component {

  state = {
    username: 'emmac124'
  }

  setUsername = (name) => {
    this.setState({
      username: name
    });
  };

  render(){
    return (
      <div className='app' style={{textAlign: 'center'}}>
        <h1>Github UserCards</h1>
        <div className='users'>
          <UserProfile username={this.state.username} />
          <UserForm setUsername={this.setUsername} />
          <Following username={this.state.username} />
        </div> 
      </div>

    );
  }
}

export default App;
