import React from 'react';
import axios from 'axios';

const fetchCard = (userCard) => {
  return axios.get(`https://api.github.com/users/${this.state.id}`)
      .then(res => res)
      .catch(err => console.log(err))
}

class App extends React.Component {
  state = {
    users: ['vocausey', 'CarlosAA10','Stu','cynthia-coronado','andybolos','matt22881','tetondan','dustinmyers','justsml','luishrd','bigknell'],
    userInfo: [],
    followersArray:[]
  }
  componentDidMount() {
    fetchCard(this.state.followersArray)
        .then(res => {
                this.setState({
                    users: res.data.message
                })
            }   
        )
}

  render(){
    return(
      <div>
        <h1>GitHub User Love Lambda</h1>
        <img src="./assets/lambdalogo.png" alt="Lambda Logo"/>
        <p>❤️'s</p>
        <img src="./assets/githublogo.png" alt="GitHub Logo" />
        <div className="gitCardContainer">
        {this.state.users}
      </div>
     </div> 
    )
  }
}

export default App