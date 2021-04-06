import axios from "axios";
import React from "react";
import GitHubUsers from "./components/GitHubUsers";
import Followers from "./components/Followers";
import Styled from "styled-components";

const StyledDiv = Styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-items:space-around;
text-align:center;
text-decoration:bold;
text-transform:uppercase;
color:green;
text-shadow:3px 2px 3px black;

div{
  margin-bottom:5%;
}

.follow{
  margin-bottom:100px;
}


img{
  border-radius:50%;
  filter:blur(5px);

  &:hover{
   filter:blur(0px);
  }
  border:black 8px solid
}

h1{
  font-size:4rem;
  color:green;
  font-family:arial;
}


h3{
  font-weight:bolder;
}



`;

class App extends React.Component {
  state = {
    user: [{}],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/AD9018/followers")
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get("https://api.github.com/users/AD9018").then((res) => {
      this.setState({
        user: res.data,
      });
    });
  }

  render() {
    return (
      <StyledDiv>
        <h1>Github Cards</h1>
        <GitHubUsers user={this.state.user} />
        <Followers followers={this.state.followers} />
      </StyledDiv>
    );
  }
}

export default App;
