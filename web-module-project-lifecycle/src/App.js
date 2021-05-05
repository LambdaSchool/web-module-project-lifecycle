import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			personData: [1, 2, 3],
			followersData: [1, 2, 3]
		};
	}

	componentDidMount() {
		axios
			.get('https://api.github.com/users/AdamH1990')
			.then(res => {
				this.setState({ personData: res.data });
				axios
					.get('https://api.github.com/users/prodhc/followers')
					.then(res => {
						console.log(res.data);
						this.setState({ followersData: res.data });
					})
					.catch(err => {
						console.log(err);
					});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<>
      <div className="card">
        <img src={`${this.state.personData.avatar_url}`} alt="Adam Hunt" />
        <div className="topbox">	
          <h2>{this.state.personData.name}</h2>
				  <h3>{this.state.personData.location}</h3>
        </div>
        <h3>{this.state.personData.bio}</h3>
				
				<h3>Follower Count: {this.state.personData.followers}</h3>
				<h3>Followers:</h3>
				{this.state.followersData.map((follower, i) => {
					return <h4 key={i}>{follower.login}</h4>;
				})}
				<h3>Following: {this.state.personData.following}</h3>
				<h3>Public Repos: {this.state.personData.public_repos}</h3>
				<h3>Git Repo: {this.state.personData.html_url}</h3>
        </div>
			</>
		);
	}
}

export default App;