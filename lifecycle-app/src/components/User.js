import React from 'react';
import Card from'react-bootstrap/Card';
import '../App.css'

const User = props => {
    return(
        <div className='user'> 
        <Card>
            <Card.Img variant='top' height='200' src={props.user.avatar_url} />
            <Card.Body>
                <Card.Title>{props.user.name}</Card.Title>
                <Card.Text>{props.user.bio}</Card.Text>
                <Card.Text>Company: {props.user.company}</Card.Text>
                <Card.Text>Location: {props.user.location}
                </Card.Text>
                <Card.Link href={props.user.html_url}>{props.user.html_url}</Card.Link>
            </Card.Body>
         
        </Card>
        </div>
    )
}

export default User;