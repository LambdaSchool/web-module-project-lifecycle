import React from 'react'

export default class FollowerCard extends React.Component {
    componentDidMount(){
        console.log('Follower Did Mount')
    }
    render() {
        const { follower } = this.props
        console.log(follower)
        return(
            <>
            <div className = 'followersImageContainer'>
                <img src = {follower.avatar_url} alt = 'Followers Avatar'/>
                <p>Follower ID: {follower.id}</p>
                <p>Follower Login: {follower.login}</p>
            </div>
            </>
        )
    }
}