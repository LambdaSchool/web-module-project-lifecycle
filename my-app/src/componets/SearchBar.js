import React, { Component } from "react";

export class SearchBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { onSubmit, onChange, data } = this.props;
		return (
			<form onSubmit={onSubmit}>
				<input
					name="SearchItems"
					type="text"
					value={data.searchItem}
					onChange={onChange}
					placeholder="Search Here for User"
				/>
				<button>Search User</button>
			</form>
		);
	}
}

export default SearchBar;
