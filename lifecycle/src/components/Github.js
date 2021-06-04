import React from 'react';
import User from './user';

class Github extends React.Component {
    render () {
        return (
            <div>
                <User key={this.props.id} github={this.props}/>
            </div>
        )
    }
}

export default Github;