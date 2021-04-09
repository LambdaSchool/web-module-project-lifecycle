import React, { Component } from "react";

//components
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default class UserCard extends Component {
  render() {
    return (
      <div>
        <div>
          <CardHeader
            image={this.props.avatar_url}
            username={this.props.login}
          />
        </div>
        <div>
          <CardBody
            login={this.props.login}
            name={this.props.name}
            location={this.props.location}
            followers={this.props.followers}
            following={this.props.following}
          />
        </div>
      </div>
    );
  }
}
