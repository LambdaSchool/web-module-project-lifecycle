import React, { Component } from "react";

export default class CardHeader extends Component {
  render() {
    return (
      <section className="card-header">
        <>
          <img src={this.props.image} alt="User Card" />
        </>
      </section>
    );
  }
}
