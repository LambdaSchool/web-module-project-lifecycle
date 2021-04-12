import React, {Component} from 'react';
import GithubUserInfo from "./GithubUserInfo"
class App extends Component {
  
render(){
  return (
    <div className="App">
      <GithubUserInfo username= 'Yonathan-Admasu728'/>
      <GithubUserInfo username= 'tetondan'/>
      <GithubUserInfo username= 'colt'/>
      <GithubUserInfo username= 'dustinmyers'/>
      <GithubUserInfo username= 'sophiebits'/>
      </div>
  );
}
}

export default App;
