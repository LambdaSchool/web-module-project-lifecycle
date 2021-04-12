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
        this.setState({imgUrl: data.avatar_url, name: data.name});
    
      }
      componentDidUpdate(prevProps, prevState) {
        console.log("component did update running");
        if (this.state.username === "yonathan-admasu728") {
          this.setState({ ...this.state, username: "tetondan" });
          this.fetchUsers();
        }
    
      }
    
      fetchUsers = () => {
        axios.get(`https://api.github.com/users/${this.props.username}`)
          .then(res => {
            let data = res.data;
            this.setState({ ...this.state, imgUrl: data.avatar_url, name: data.name })
          })// happy path
          .catch(err => console.log(err)); // sad path :(
      }
    
      handleChanges = event => {
        this.setState({
          ...this.state,
          username: event.target.value
        });
      }
      
    render(){
        return(
          <div className="GithubUsersInfo">
          <div>
            <h1>Github User: {this.state.name}</h1>
              <img src={this.state.imgUrl} alt= "" />
              <p> followers: {this.state.followers}</p>
           </div>
          </div>
          
        )
    }
}
export default GithubUserInfo;
