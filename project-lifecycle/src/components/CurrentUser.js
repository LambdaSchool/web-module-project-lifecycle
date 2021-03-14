import React, { Component } from 'react'
import User from './User'

class CurrentUser extends Component {
  render() {
    return (
      <div className="CurrentUser">
        <User user={this.props.user} />
        {
          this.props.followers && this.props.followers.length > 0 &&
          <div className="vertical-line"></div>
        }
      </div>
    )
  }
}

export default CurrentUser
