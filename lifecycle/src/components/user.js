import React from 'react';

class User extends React.Component {
    componentDidMount() {
        console.log(`User ${this.props.github.login} Mounts`)
    }
    render() {

        return (
           <div key={this.props.id} className='github'>
               <h3>{this.props.login}</h3>
           </div>
        )
    }
}

export default User;