import React from 'react'
import Friend from './Friend'


function Friends (props) {

    return(
        <div  className='friendsContainer'>
            <h3>Here are some rather talented people on Git-hub!</h3>
            {
              props.friendsData.map(friend => (<Friend friend={friend} isOpen={props.isOpen} toggle={props.toggle}/>))
            }
        </div>
    )
}

export default Friends