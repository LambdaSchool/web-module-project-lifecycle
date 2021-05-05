import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';

import UserSearch from './components/UserSearch';
import UserCard from './components/UserCard';

class App extends Component {
  state = {
    mount: {},
    update: {},
    search: ''
  };
  componentDidMount() {
    Axios.get(`https://api.github.com/users/Hugo-Orozco`)
      .then((res) => {
        const mount = res.data;
        this.setState({ mount });
      });
  }
  default = () => {
    const search = '';
    this.setState({ search });
  }
  update = (name, value) => {
    console.log({name, value});
    const search = value;
    this.setState({ search });
  }
  submit = () => {
    if (this.state.search.trim().length > 0) {
      Axios.get(`https://api.github.com/users/${this.state.search}`)
        .then((res) => {
          const update = res.data;
          this.setState({ update });
          this.default();
        })
        .catch((err) => {
          this.default();
        });
    }
  }
  render() {
    return (
      <div className="App">
        <header className='title-container'>
          <span className='title-text' onClick={() => window.location.reload()}>GitHub</span>
        </header>
        <UserSearch search={this.state.search} update={this.update} submit={this.submit}/>
        {
          Object.keys(this.state.update).length > 0 ? <UserCard data={this.state.update} /> : <UserCard data={this.state.mount} />
        }
      </div>
    );
  }
}

export default App;
