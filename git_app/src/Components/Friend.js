import React from 'react'
import {
    Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class Friend extends React.Component {

    render(){
        const { friend, toggle } = this.props;

        return(
            <div key={friend.id} className='friend'>
                <CardImg top width="100%" src={friend.avatar_url} alt="Card image cap" />
                <Button color="primary" onClick={this.props.toggle} style={{ marginBottom: '1rem' }}>Show More</Button>
                <Collapse isOpen={this.props.isOpen}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">User: {friend?.login}</CardTitle>
                            <CardText>Recontextualize leading-edge, "B2C visualize," web-enabled widgets platforms evolve; maximize, e-commerce implement channels benchmark. Networks, "systems blogging deploy implement efficient convergence orchestrate deploy, syndicate." Whiteboard rss-capable evolve aggregate empower, intuitive engage, open-source convergence synthesize, solutions citizen-media design.</CardText>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}

export default Friend