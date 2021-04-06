import React, { Component } from "react";
import User from "./componets/User";
import SearchBar from "./componets/SearchBar";
import axios from "axios";

export class App extends Component {
	constructor() {
		super();

		this.state = {
			data: [],
			searchBar: "",
		};
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users/undefined")
			.then((res) => {
				console.log(res);
				this.setState({
					data: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleChange = (e) => {
		this.setState({
			searchBar: e.target.value,
		});
		console.log(this.state.breed);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get(`https://api.github.com/users/${this.state.searchBar}`)
			.then((res) => {
				console.log(res);
				this.setState({
					data: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				<SearchBar
					onSubmit={this.handleSubmit}
					onChange={this.handleChange}
					searchbar={this.state.searchBar}
				/>
				<User data={this.state.data} />
			</div>
		);
	}
}

export default App;
