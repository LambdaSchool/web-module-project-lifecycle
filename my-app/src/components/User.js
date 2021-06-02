import axios from "axios";
import React, {Component} from "react"

// this state logic will be intialize in a structure when babel takes our code moves to the broweser.

class User extends Component{
    state = {
    user:null
  

    }

    componentDidMount(){
        axios.get("https://api.github.com/users/abemm7787")
        .then((res) => {
            console.log(res.data)
            this.setState({ user: res.data,
            
    
            })
        })
        .catch() 
        }
          

// deconstructor state property c

render() {
    const {user} = this.state;

  if(!user) return <p>Loading data...</p>

return <div className="Users">
<h3>{this.state.user.name} </h3>

<img style={{width: "150px", borderRadius: "50%"}}

src={this.state.user.avatar_url} alt={this.state.user.name} className="abe"/>

<p>username: {user.login}</p>
<p>repos: {user.public_repos}</p>

</div>
}
}

export default User;