import React from 'react';
// import axios from 'axios';
import './App.css';
// import UserCardList from './Components/UserCardList';
// import UserCard from './Components/UserCard';
import UserContainer from './Components/UserContainer';
import UserForm from './Components/UserForm';
import dataFetch from './Components/DataFetch';


// AXIOS //
axios
.get("https://api.github.com/users/DasRedcoat")
.then(response => {
  const userInfo = document.querySelector({})
  userInfo.map((userCard(response.data)))
.catch(error => {
  console.log(error)
})



class App extends React.Component {
  state = {
      name: `${response.name.data}`,
      followers: `${response.followers.data}`,
      following: `${response.following.data}`
    };
  }


  componentDidMount(){
    console.log("Component Mounted Successfully");
    setTimeout(() =>{
      this.setState( {
      name: `${response.name.data}`,
      followers: `${response.followers.data}`,
      following: `${response.following.data}`
      });
    }, []);
  }

  handleChange = (event) => {
    this.setState({
        name: event.target.value,
        followers: event.target.value,
        following: event.target.value
    });

  handleSubmit = (event) => {
    event.preventDefault();
    fetchData(this.state.data)
        .then(userInfo => {
            this.setState({
              name: `${response.name.data}`,
              followers: `${response.followers.data}`,
              following: `${response.following.data}`
            });
        })
        .catch(error=>{
            console.log(error);
        });
  }

  render() {
    return (
      <div className = "App">
          <UserContainer userCard={this.state.userCard} />
      </div>
    )
  };


export default App
