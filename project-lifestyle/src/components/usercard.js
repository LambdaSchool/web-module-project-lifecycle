import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 500px;
    margin:10px;
    text-align: center;
    background-color:white;
    border: 2px dashed black;
    img {
        width:300px;
    }
`

const Usercard = (props) => {
    console.log(props)
    return(
    <StyledDiv>
        <h1>Hello, {props.userData.login}</h1>
        <img src={props.userData.avatar_url}/>
        <h2>You have: {props.userData.public_repos} repos!</h2>
    </StyledDiv>
    );
}



export default Usercard;