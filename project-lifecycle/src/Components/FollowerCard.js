import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserCard from './UserCard'


const FollowerCard = props => {

    const {user} = props
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
        //   console.log(res.data)
            setUserInfo(res.data)
        })
        .catch(err => {
            console.log(err);
        });
    },[])

    return (
        <div>
            <UserCard userInfo={userInfo} />
        </div>
    )
}




export default FollowerCard