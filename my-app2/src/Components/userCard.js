import React from 'react';


class UserCard extends React.Component {
    componentDidMount() {
        console.log(`userCard ${this.props.userCard.name} is working` );
    }
}

export default UserCard
