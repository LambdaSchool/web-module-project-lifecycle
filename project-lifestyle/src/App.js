import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Usercard from './components/usercard.js'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display:flexbox;
    background-color: lightgray;
    justify-content: center;
    flex-wrap: wrap;
`

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: {}
        }
      }
    

    componentDidMount() {
        axios.get("https://api.github.com/users/poonchy")
            .then(res => {
              console.log(res.data)
                this.setState({
                    userData: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return<StyledDiv>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
            <Usercard userData = {this.state.userData}/>
        </StyledDiv>
    }
}



export default App;