import React from 'react';
import axios from 'axios';

class User extends React.Component {
    state = {
        user : null
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/LirongCui")
          .then(res => {
            this.setState({
              ...this.state,
              user: res.data,
            })
          })
          .catch(err => console.log(err));
      }


    render(){
        const {user} = this.state;
        if (!this.state.user) return <p>Loading...</p>;
        return (
            <div>
                <img 
                style={{width: '100px',  borderRadius: "30%"}}
                src={user.avatar_url} 
                alt={user.name}/>
                <h3>{user.name}</h3>
                <h4>{user.location}</h4>
            </div>
        )
    }
}

export default User;