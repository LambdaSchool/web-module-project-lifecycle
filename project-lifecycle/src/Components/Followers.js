import React from 'react'
import styled from 'styled-components'

import FollowerCard from './FollowerCard'

const Followers = props => {
    const {followersArray} = props

    return (
        <div>
            <h2>Followers:</h2>
            <div>
                {followersArray.map(user => {
                    <FollowerCard 
                        key={user.id}
                        user={user}
                    />
                })}
            </div>
        </div>
    )
}

export default Followers