import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './UserCard'

const FollowerCard = props => {
    const {user} = props
    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
          setUserData(res.data)
        })
        .catch(err => {
            console.log(err);
        });
    },[])

    return (
        <div>
            <UserCard userData={userData} />
        </div>
    )
}
export default FollowerCard