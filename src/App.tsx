import React from 'react'
import axios from 'axios'

interface AppProps {

}

interface User {
  username: string
  avatar: string
  url: string
  location: string
  followers: Follower[]
}

interface Follower {
  username: string
  avatar: string
  url: string
}

interface AppState {
  user: User | null
}

const BASE_URL = 'https://api.github.com/users'

class App extends React.Component<AppProps, AppState> {
  constructor(props: { }) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/lindellcarternyc`)
      .then(res => {
        const { login, avatar_url, html_url, location } = res.data
        const user: User = {
          username: login,
          avatar: avatar_url,
          url: html_url,
          location,
          followers: []
        }

        axios.get(`${BASE_URL}/lindellcarternyc/followers`)
          .then(res => {
            res.data.forEach((u: any) => {
              const follower: Follower = {
                username: u.login,
                url: u.html_url,
                avatar: u.avatar_url
              }
              user.followers.push(follower)
            })
            this.setState({ user })
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Github User Card</h1>
        {JSON.stringify(this.state.user)}
      </div>
    )
  }
}

export default App;
