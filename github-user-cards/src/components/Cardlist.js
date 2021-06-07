import React, { Component } from 'react';
import Card from './Card';

export default class Cardlist extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  };

  componentDidMount() {
    console.log('component mounted');
    fetch('https://api.github.com/users/juush')
    .then(response => response.json())
    .then(data => this.setState({ user: [data], key: Date.now() }));
    fetch('https://api.github.com/users/juush/following')
    .then(response => response.json())
    .then(data => this.setState({ followers: [data], key: Date.now() }));
  }

  componentDidUpdate() {
    console.log('component updated');

  }

  render() {
    return (
      <div>
      {this.state.user.map(e => <Card user={e} followers={this.state.followers}/>)}
      </div>
    );
  }
}
