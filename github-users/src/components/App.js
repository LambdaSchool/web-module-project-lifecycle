import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state= {
    user: 'spencerp34',
    URL: '',
    pic: '',
    name: '',
    followers: []    
  }

  componentDidMount(prevProps, prevState) {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({
          ...this.state,
          URL: res.data.html_url,
          pic: res.data.avatar_url,
          name: res.data.name,
        })
      })
      .catch(err => {
        console.log(err)
      })

      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
        .then(res => {
          this.setState({
            ...this.state,
            followers: res.data
          })
        })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // console.log('submitted')
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({
          ...this.state,
          URL: res.data.html_url,
          pic: res.data.avatar_url,
          name: res.data.name,
        })
      })

      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
        .then(res => {
          this.setState({
            ...this.state,
            followers: res.data
          })
        })

      var form = document.getElementById("myForm");
      form.reset();
  }

  

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      ...this.state,
      user: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>What Class Mate shall we stalk today?</h1>
          <form id='myForm' onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' placeholder='Github User' />
            <button>Lets Stalk!</button>
          </form>
        </header>
        <br/> <br/>
        <div className='user-card'>
          <img src={this.state.pic} alt='pic'/>
          <br/>
          <p>
            Name: {this.state.name}
          </p>
          <nav>
            <a href={this.state.URL}>{`URL: ${this.state.URL}`}</a>
          </nav>
          <p>
            Followers: {this.state.followers.map(item => {
              return(`${item.login}, `) 
            })}
          </p>
        </div>

      </div>
    );
  }
}

export default App;
