import React from 'react';

class User extends React.Component {

  render() {
    return (
      <div>
        <h2>Name: {this.props.info.name}
        </h2>
        <img src={this.props.info.avatar_url} alt='avatar'/>
      </div>
    );
  }
}

export default User;