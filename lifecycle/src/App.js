import './App.css';
import React from 'react';
import axios from 'axios';
import Github from './components/Github';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      github: []
    }
  }

componentDidMount() {
  axios.get(`https://api.github.com/users/chandapwes`)
      .then((res => {
        this.setState({
          github:res.data.login
        })
        console.log(res.data)
      })) 
      .catch((err => {
        console.log(err);
      }))
    }

  render() {
    return (
      <div className='App'>
         <h1>GitHub User Cards</h1>
        <div>
         <Github github={this.state}/>
        </div>
      </div>
    )
  }
}



export default App;
