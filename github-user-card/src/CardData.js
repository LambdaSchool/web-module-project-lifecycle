import React from "react";

export default class CardData extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
      </div>
    );
  }
}
