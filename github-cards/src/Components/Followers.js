import React from 'react';
import FollowerCard from './FollowerCard'

const Followers = props => {
    const {followersArr} = props

    return (
        <div>
            <div>
                {followersArr.map(user => {
                    return (
                        <FollowerCard key={user.id} user={user} />
                    )
                }) }
            </div>
        </div>
    )
}

export default Followers