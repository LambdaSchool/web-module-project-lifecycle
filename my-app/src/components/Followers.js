import React, { Component } from 'react'
import axios from "axios";


//empty array
 class Followers extends Component {
     state = {
         followers: []
     }

    componentDidMount(){
        axios.get("https://api.github.com/users/abemm7787/followers")
        .then((res) => {
            this.setState({
                followers:res.data,
            })
        })
        .catch((err) => console.log(err))

    }




    render() {
        const {followers} = this.state;
        if(followers.length === 0) return <p> Loading Followers </p>
        return ( <div>

            {followers.map(follower =>(
                <div key={follower.id} className="follwerr-card">
          </div>
        ))}
        </div>)   
    }}

export default Followers;