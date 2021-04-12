import React, {Component} from 'react';
import GithubUserInfo from "./GithubUserInfo"
class App extends Component {
render(){
  return (
    <div className="App">
      <GithubUserInfo username= 'lilia1989'/>
      <GithubUserInfo username= 'tetondan'/>
      <GithubUserInfo username= 'colt'/>
      <GithubUserInfo username= 'dustinmyers'/>
      <GithubUserInfo username= 'Yonathan-Admasu728'/>
      </div>
  );
}
}
export default App;
