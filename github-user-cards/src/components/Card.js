import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className=""
        style= {{
          margin: '0 750px',
        }}>
        <section className="d-flex justify-content-center">
          <h5>{this.props.user.login}</h5>
          <img src={this.props.user.avatar_url} alt='users avatar' />
        </section>
        <div className="d-flex justify-content-around">
          {this.props.followers[0].map(follower => (
            <div>
              <p className="my-3 text-center">{follower.login}</p>
              <img src={follower.avatar_url}
                style={{
                  maxWidth: '50px',
                  margin: '0 50px',
                }}
                alt='followers avatar'
                />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
