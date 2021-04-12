import React, {Component} from 'react';
import axios from 'axios';
class GithubUserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {imgUrl: "", name: "",followers: ""};
      }
      async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let res = await axios.get(url);
        let data = res.data;
        this.setState({imgUrl: data.avatar_url, name: data.name, forllowers: data.followers_url});
      }
     
    render(){
        return(
          <div className="GithubUsersInfo">
          <div>
            <h1>Github User: {this.state.name}</h1>
              <img src={this.state.imgUrl} alt= "" />
              <p> followers: {this.state.followers_url}</p>
           </div>
          </div>
        )
    }
}
export default GithubUserInfo;