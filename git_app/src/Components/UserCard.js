import React from 'react'
import {
    Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class UserCard extends React.Component {

    // state = { isOpen: false }

    render(){
    const { userData, toggle, isOpen } = this.props

    console.log(this.props.toggle)
    
    return(
        <div className='userCardDiv'>
            <CardImg width="100" src={userData.avatar_url} alt="Card image cap" />
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Show More</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">User: {userData.name}</CardTitle>
                        <CardText>{userData.bio}</CardText>
                    </CardBody>
                </Card>
            </Collapse>
            <div className='imgDiv'>
                <h4>Here is my current Git-Hub contribution callender.</h4>
                <img src="http://ghchart.rshah.org/l-steinmacher" alt="l-steinmacher's Github chart" />
            </div>
        </div>
    )
    }
}


export default UserCard