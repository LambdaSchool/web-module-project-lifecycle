import { Component } from "react";
import "../stylesheets/UserCard.css";
import axios         from "axios";

class UserCard extends Component {
    constructor () {
        super();
        this.state = {
            userData: [],
        }
    }
    setUserData    = res => {
        this.setState( { ...this.state.userData, userData: res.data } );
    };
    componentDidMount () {
        axios.get( `https://api.github.com/users/${this.props.usernameInput}` )
             .then( res => {
                 this.props.setUserData( res )
                 this.setUserData( res )
             } )
             .catch( err => console.error( err ) );
    }

    render () {
        return (
            <figure className="user-card-container">
                <h1 className="user-card-header">{this.state.userData.name}</h1>
                <img className="github-profile-img" src={this.state.userData.avatar_url}
                     alt="Loaded from Github profile"/>
                <div className="figure-grid-container">
                    <figcaption>
                        {this.state.userData.name}'s Bio:
                        <br/>
                        {this.state.userData.bio}
                    </figcaption>
                    <figcaption>Follower Count: {this.state.userData.followers}</figcaption>
                    <figcaption>Following Count: {this.state.userData.following}</figcaption>
                    <figcaption>Twitter Handle:
                        <br/>
                        {this.state.userData.twitter_username}
                    </figcaption>
                    <a className='user-card-link' href={this.state.userData.html_url}>Go to {this.state.userData.name}'s profile</a>
                </div>
            </figure>
        );
    }
}

export default UserCard;