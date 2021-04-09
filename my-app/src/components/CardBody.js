import React, { Component } from "react";

export default class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <h4>Username: {this.props.login}</h4>
        <h4>Name: {this.props.name}</h4>
        <h4>Followers: {this.props.followers}</h4>
        <button>
          <a href={`https://github.com/${this.props.login}`}>GitHub</a>
        </button>
      </div>
    );
  }
}
