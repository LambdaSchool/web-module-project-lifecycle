import { Component } from "react";
import { NavLink } from 'react-router-dom';
import '../stylesheets/Nav.css';

class Nav extends Component {
    render () {
        return (
            <nav>
                <NavLink id='nav-user' className='nav-link' exact to='/user'>Go Back to {this.props.username}'s Info</NavLink>
                <NavLink id='nav-followers' className='nav-link' exact to='/followers'>{this.props.username}'s Followers</NavLink>
                <NavLink id='nav-repos' className='nav-link' exact to='/repos'>{this.props.username}'s Repos</NavLink>
                <NavLink id='nav-new-search' className='nav-link' exact to='/' onClick={this.props.resetApp}>New Search</NavLink>
            </nav>
        )
    }
}

export default Nav;