import React from 'react';

class UserCard extends React.Component {
    
  render() {
      return(
        <>
        {this.props.followers.map((follower) => {
          return(
        <div key={follower.login} className="follower">
          <div className="follower-content"><img src={`${follower.avatar_url}`} alt=""/>
            <p>{follower.login}</p>
            <div className="see-followers" onClick={()=>{this.props.seeFollowers(follower.login)}}>
              SEE FOLLOWERS
            </div>
          </div>
        </div>)})
      }
      </>
    );
  }
}

export default UserCard;
