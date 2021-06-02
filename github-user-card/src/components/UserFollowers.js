import React from 'react';
import Follower from './Follower';
// import axios from 'axios';

class UserFollowers extends React.Component {
    // research or ask about strategies for making multiple axios requests. currently have my 2nd axios get request nested in the 1st request in App.js
    // componentDidMount() {
    //     axios.get("https://api.github.com/users/Vehmeyer/following")
    //       .then((res) => {
    //         console.log(res.data)
    //         this.setState({
    //           followers: res.data
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     })  
    // }

    render() {
        return (
            <div className="container">
                <h3>Following:</h3>
                {this.props.followers.map(follower => (
                    <Follower key={follower.id} follower={follower} />
                ))}
            </div>
        )
    }
}

export default UserFollowers;