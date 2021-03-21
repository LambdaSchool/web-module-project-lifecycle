import React from 'react'
import axios from 'axios'
import AppCss from './App.css'
import {FaGithub} from 'react-icons/fa'

class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     gitUser: '',
     gitRepos: '',
     gitFollowers: '',
     gitFollowersUrl: '',
     gitFollowing: '',
     gitFollowingUrl: '',
     gitOrganizations: ''
  }
}

  componentDidMount(){
    axios.get("https://api.github.com/users/liliana-leyva")
      .then(res=>{
        console.log('Response from API',res)
        this.setState({
          ...this.state,
          gitUser: res.data.name,
          gitRepos: res.data.public_repos,
          gitAvatar:res.data.avatar_url,
          gitFollowers: res.data.followers,
          gitFollowing: res.data.following,
          gitOrganizations: res.data.organizations_url
        })
      })
      .catch(err=>console.error('unable to fetch user:',err.name))
  }
  
      
    render(){
      return(
      <>
      <div className="header"> 
        <h1>Git Hub</h1>
        <FaGithub className="git"/>
      </div>
      
       <div className="gitCard" >
         <div className="data">
          <p>{`User name: ${this.state.gitUser}`} </p>
          <p>{`Repositories: ${this.state.gitRepos}`}</p>
          <p>{`Followers :${this.state.gitFollowers}`}</p>
          <p>{`Following: ${this.state.gitFollowing}`}</p>
         </div>
        <img  className= "avatar" key={this.state.gitAvatar} src={this.state.gitAvatar}></img>
       </div>
       
       
       {/*<div>
        <p>Organizations</p>
        <img src={this.state.gitOrganizations}/>
       </div>*/}
      
      
      </>
      )
    }
}





export default App;
