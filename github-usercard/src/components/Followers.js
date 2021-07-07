import React from 'react'
import FollowerCard from './FollowerCard'

const Followers = props => {
    const { followersArray } = props

    return (
        <div>
            <h2>Followers:</h2>
            <div>
                {followersArray.map(user => {
                    return (
                        <FollowerCard 
                            key={user.id}
                            user={user}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Followers