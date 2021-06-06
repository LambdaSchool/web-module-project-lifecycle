import React from 'react';

class Follower extends React.Component {
    render() {
        return (
            <div>
                <h2>Follower Name: {this.props.info.login}</h2>
            </div>
        );
    }
}

export default Follower;