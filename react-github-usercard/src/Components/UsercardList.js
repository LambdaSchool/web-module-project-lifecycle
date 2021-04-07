import React from 'react';
import Usercard from './Usercard'

class UsercardList extends React.Component {
    componentDidMount() {
        console.log('UsercardList mount successful')
    }

    render() {
        const { users } = this.props;
        
        return(
            <div>
                <h2>Usercard List</h2>
                <Usercard users={users}/>
            </div>
        )
    }
}


export default UsercardList;