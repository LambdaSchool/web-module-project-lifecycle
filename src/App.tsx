import React from 'react'
import 'fontsource-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'

import Container from '@material-ui/core/Container'

import { User } from './models/User.model'

import { getUser } from './api'

import UserCard from './components/UserCard'

interface AppProps {

}

interface AppState {
  user: User | null
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: { }) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    getUser('lindellcarternyc')
      .then(user => this.setState({ user }))
      .catch(err => {
        console.error(err)
      })
    // getFollowers('lindellcarternyc')
    //   .then(val =>{
    //     console.log('getFollowers: val ', val)
    //   })
    //   .catch(err => {
    //     console.log('getFollowers err', err)
    //   })
    // axios.get(`${BASE_URL}/lindellcarternyc`)
    //   .then(res => {
    //     const { login, avatar_url, html_url, location, id } = res.data
    //     const user: User = {
    //       username: login,
    //       avatar: avatar_url,
    //       url: html_url,
    //       location,
    //       followers: [],
    //       id
    //     }

    //     axios.get(`${BASE_URL}/lindellcarternyc/followers`)
    //       .then(res => {
    //         res.data.forEach((u: any) => {
    //           const follower: Follower = {
    //             username: u.login,
    //             url: u.html_url,
    //             avatar: u.avatar_url,
    //             id: u.id
    //           }
    //           user.followers.push(follower)
    //         })
    //         this.setState({ user })
    //       })
    //       .catch(err => {
    //         console.error(err)
    //       })
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
    // // fetchUser('lindellcarternyc')
    // //   .then(user => this.setState({ user }))
    // //   .catch(err => {
    // //     console.error(err)
    // //   })
  }

  render() {
    const toRender = this.state.user ? (
      <UserCard user={this.state.user}/>
    ) : <h2>Loading...</h2>

    return (
      <>
        <CssBaseline />
        <Container maxWidth="sm">
          <h1>Github User Card</h1>
          {toRender}
        </Container>
      </>
    )
  }
}

export default App;
