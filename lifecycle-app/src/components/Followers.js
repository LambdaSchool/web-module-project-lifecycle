import React from 'react';
import Card from'react-bootstrap/Card';
import '../App.css'

const Follower = props => {
    return(
        <div className='follower'> 
        <Card style={{ width: '18rem'}}>
            <Card.Img variant='top' height='200' src={props.follower.avatar_url} />
            <Card.Body>
                <Card.Title>{props.follower.name}</Card.Title>
                <Card.Text>{props.follower.bio}</Card.Text>
                <Card.Text>Company: {props.follower.company}</Card.Text>
                <Card.Text>Location: {props.follower.location}
                </Card.Text>
                <Card.Link href={props.follower.html_url}>{props.follower.html_url}</Card.Link>
            </Card.Body>
         
        </Card>
        </div>
    )
}

export default Follower;