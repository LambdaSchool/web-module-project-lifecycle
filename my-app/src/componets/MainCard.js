import React, { Component } from "react";

export class MainCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { Userdata } = this.props;
		return (
			<div>
				<div>
					<h1>{Userdata.name}</h1>
				</div>
				<div>
					<img src={Userdata.avatar_url} alt="" />
				</div>
				<div>
					<div>
						<p>Location: {Userdata.location}</p>
						<p>URL: {Userdata.html_url}</p>
					</div>
					<div>
						<p>Followers: {Userdata.followers}</p>
						<p>Following: {Userdata.following}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MainCard;
