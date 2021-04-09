import React from "react";
import axios from "axios";
import Followers from "./followers";
import GitHubCalendar from 'github-calendar'

class User extends React.Component {
  
  constructor(props) {
    //console.log('incoming props sanity check from User component', props)
    super(props);

    this.state = {
      followers: [],
    };
  }

  // this function checks to see if props.user is the same as previous state. if not, update
  componentDidUpdate(prevProps, prevState) {
    //console.log('this.props.user compared to ', this.props.user, 'prevProps.user', prevProps.user)
    if (this.props.user !== prevProps.user) {
      //ALWAYS DO ABOVE TO STOP INFINITE LOOPS
      axios
        .get(this.props.user.followers_url)
        .then((res) => {
          this.setState((prevState) => ({
            ...prevState,
            followers: res.data,
          }));
         // console.log("Resolved Data from componentDidUpdate in User.js", res.data)
        })
        .catch((error) => console.log(error));
    }
  }

  render() { 
    const { user } = this.props;
    // GitHubCalendar(".calendar", "artofmayhem");
    // or enable responsive functionality:
  //  GitHubCalendar(".calendar", "artofmayhem", { responsive: true });

    return (
      <div className="d-flex flex-row justify-content-between">
        <div className="card">
          <a href={user.html_url}>
            <img src={user.avatar_url} alt={user.login}></img>
          </a>

          <h1 className="name">{user.name}</h1>
          <h3>Location: {user.location}</h3>
          <h4>User Name: {user.login}</h4>
          <h4>About Me: {user.bio}</h4>
          <p>Who do I work for: {user.company}</p>
          <p>What do I do: I make fantastic web experiences</p>
          <a href="https://twitter.com/tmillhawaii">
            Hit me on twitter! @{user.twitter_username}
          </a>
          <a href={user.blog}>Check out my portfolio created using Gatsbyjs</a>
        </div>
        <div className="card d-flex flex-column ">
          <h3>My Followers</h3>
          <Followers followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default User;
