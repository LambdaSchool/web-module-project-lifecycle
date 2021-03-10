import React, { Component } from "react";
import SearchBar from "../src/componets/SearchBar";
import MainCard from "./componets/MainCard";
import SearchResults from "./componets/SearchResults";
import axios from "axios";

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			searchItem: "",
			cardData: {},
			currentUser: "",
		};
	}

	handleChange = (e) => {
		this.setState({ searchItem: e.target.value });
		console.log(e.target.value);
	};
	handleSubmit = (e) => {
		console.log("3", e.target.value);
		this.setState({ currentUser: this.state.searchItem.keys });
	};
	componentDidMount() {
		axios
			.get(`https://api.github.com/users/${this.state.searchItem.keys}`)
			.then((res) => {
				console.log("1", res.data);
				this.setState({ cardData: res.data });
			});
	}
	render() {
		return (
			<div>
				<SearchBar
					onSubmit={this.handleSubmit}
					data={this.state}
					onChange={this.handleChange}
				/>
				<MainCard Userdata={this.state.cardData} />
			</div>
		);
	}
}
