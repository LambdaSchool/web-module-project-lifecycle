import React from 'react'

class UserCard extends React.Component {

    render(){
        return(
           <div className="userCard">
               <h1>{this.props.user.name} </h1>
               <div className="image">
                    <img width="200px" src={this.props.user.avatar_url} alt={this.props.user.name}/>
               </div>
               <div className="details">
                   <h3>{this.props.user.login}</h3>
                   <p>Location: {this.props.user.location}</p>
                   <p>Profile: 
                       <a href={this.props.user.html_url}> {this.props.user.html_url}</a>
                   </p>
                   <p>Followers: {this.props.user.followers}</p>
                   <p>Following: {this.props.user.following}</p>
               </div>
           </div>
        )
    }

}
export default UserCard;