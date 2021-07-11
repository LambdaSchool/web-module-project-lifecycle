import React from 'react'

export default class User extends React.Component {
    componentDidMount() {
        console.log('User Component Mounted')
    }
    render(){
        const { user } = this.props
        console.log(user)
        return(
            <>
            <div className = 'userImageContainer'>
                <img alt = 'User Avatar' src={user.avatar_url}/>
            </div>
            <div className = 'userInfoContainer'>
                <h2>{user.name}</h2>
                <p>Login: {user.login}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>URL: {user.url}</p>
            </div>
            </>
        )
    }
}
