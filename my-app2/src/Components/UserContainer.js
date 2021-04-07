import React from 'react';

class UserContainer extends React.Component {
    render() {
        return (<div id="userContainer">
            {this.props.userInfo.map(data => {
                return (
                <div>
                    <p key = {data.name} />
                    <p key = {data.followers} />
                    <p key = {data.following} />
                </div>
                );
            })}
        </div>);
    }
}

export default UserContainer;