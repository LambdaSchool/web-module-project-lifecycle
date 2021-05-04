import React from 'react'
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard';
import FriendCard from './components/FriendCard'
import styled from 'styled-components'

class App extends React.Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/ZacharyCooremans')
    .then((res) => {
      //console.log(res)
      this.setState({
        user: res.data
      })
      axios
      .get('https://api.github.com/users/ZacharyCooremans/followers')
      .then((res) => {
        console.log(res)
        this.setState({
          followers: res.data 
        })
        axios
        .get(`https://api.github.com/users/${this.state.followers.login}`)
        .then((res) => {
          console.log("This would be full followers info", res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
    })

  }
  render() {
    return (
      <Page className="App">
        <UserCard user={this.state.user}/>
        <Card>
          {
            this.state.followers.map(person => {
              return <div>
                <FriendCard person={person}/>
              </div>
            })
          }
        </Card>
      </Page>
    );
  }
}

export default App;

const Page = styled.div`
  background-color: #306ccf
`
const Card = styled.div`
  border: 2px solid green;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;

`
