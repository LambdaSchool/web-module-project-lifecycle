
//THIS APP IS ONLY RENDERING MY OWN GITHUB PAGE///
import React from 'react';
import axios from 'axios';

import UserForm from './components/UserForm';
//add styling imports here

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
      gitHubUserData: {},
      gitHubUserFollowerData: []
    }
  }
  
  componentDidMount() {  ///THIS IS ALL WORKING///
    //initial API call! 
    axios
    .get(`http://api.github.com/users/mollybee`) 
      .then(res => {
        console.warn('~~ RESPONSE FIRED')
        this.setState({...this.state, gitHubUserData: res.data})
        console.log(res.data, 'axios request & slice 1 is working!')
        this.setState({...this.state, loginName: res.data.login})
        console.log(res.data.login, 'axios request & slice 2 is working!')
      })
      .catch(err => console.log(err));
  }

  // componentDidUpdate(prevProps, prevState) { //are these built-in props as part of the class component?
  //   console.log('component did update running');
  //   if (this.state.loginName === 'mollybee') { //Basically saying, if the login name typed in is mollybee, display the gitHubUserData in the console, and run the fetch function
  //     console.log(this.state.gitHubUserData, 'component did update is working!')
  //     this.fetchGitHubUserData(); //which will display my followers
  //   }
  // }
  
  //Here's the function to change the state & 2nd axios request
 
  fetchGitHubUserData = () => {
    axios.get(`https://api.github.com/users/${this.state.loginName}/followers`) 
      .then(res => {
        this.setState({ ...this.state, loginName: '', gitHubUserFollowerData: res.data })
      })
      .catch(err => console.log(err));
  }

  //Change Handler Function - to search other people's login names?
  handleChanges = evt => {
    this.setState({
      ...this.state,
      loginName: evt.target.value
    });
  }

  getFollowerData = (evt) => {
    console.log('component did update running');
    console.log(this.state.gitHubUserData, 'component did update is working!')
    this.fetchGitHubUserData(this.state.loginName); //which will display my followers
  }


  render() {
    return(
      <div className="App">
        <h1>GitHub Users Log</h1>
        <div>
          <UserForm
            loginName={this.state.loginName}
            gitHubUserData={this.state.gitHubUserData}
            onChange={this.handleChanges}
            onButtonClick={this.getFollowerData}
          />
        </div>
       
      </div>
    )
  }
};


export default App;
