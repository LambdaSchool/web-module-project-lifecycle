import { Component } from "react";
import axios         from "axios";
import '../stylesheets/Followers.css';

class Followers extends Component {
    constructor () {
        super();
        this.state = {
            followerData: [],
        }
    }
    setFollowerData = data => {
        this.setState({...this.state.followerData, followerData: data})
    }
    componentDidMount () {
        axios.get(this.props.followersUrl)
            .then(res => {
                this.setFollowerData(res.data)
            })
            .catch(err => console.error(err))
    }

    render () {
        return (
            <section className='followers-container'>
                {this.state.followerData.map(follower => {
                    return (
                        <a
                            key={follower.id}
                            className='followers-link'
                            href={follower.html_url}
                        >
                            <img
                                className='followers-img'
                                src={follower.avatar_url}
                                alt={follower.login}
                            />
                        </a>
                    )
                })}
            </section>
        );
    }
}

export default Followers;