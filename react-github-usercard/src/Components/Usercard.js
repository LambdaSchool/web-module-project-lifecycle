import React from 'react';

class Usercard extends React.Component {
    componentDidMount() {
        console.log('Usercard successfully mounted!')
    }

    render() {
        const { users } = this.props;
        console.log(users)
        return (
            <div className='usercard'>
                {/* <h2>I am a usercard dummy</h2> */}
                <div>
                    <img alt='Github user avatar' src={`${users.avatar_url}`}/>
                </div>
                <div>
                    {users.name}
                    <h3>{users.login}</h3>
                    <p>{users.url}</p>
                    <p>{`Followers: ${users.followers}`}</p>
                    <p>{`Following: ${users.following}`}</p>
                </div>
                
            </div>
        )
    }
}

export default Usercard;