import React from 'react';
import axios from 'axios';

import './App.css';
import Card from './Card'
 

class App extends React.Component {
    state = {
        users: [],
        following: [],
    };

    componentDidMount () {
        axios.get('https://api.github.com/users/zach-morris-txt')
            .then((response) => {
              this.setState({
                users: response.data ,
              });            
            })
            .catch((error) => console.log(error));
        axios.get('https://api.github.com/users/zach-morris-txt/followers')
            .then((response) => {
              this.setState({
                following: response.data ,
              });
            })
            .catch((error) => console.log(error));
    }

    render() {
        console.log('rendering');
        return (
            <div className='App'>
                  <Card users={this.state.users} following={this.state.following} /> 
            </div>
        );
    };
}

export default App;