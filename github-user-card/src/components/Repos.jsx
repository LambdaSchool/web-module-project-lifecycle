import { Component } from "react";
import axios         from "axios";
import '../stylesheets/Repos.css';

class Repos extends Component {
    constructor () {
        super();
        this.state = {
            reposData: [],
        }
    }
    setReposData = data => {
        this.setState({...this.state.reposData, reposData: data})
    }
    componentDidMount () {
        axios.get(this.props.reposUrl)
             .then(res => {
                 this.setReposData(res.data)
                 this.state.reposData.sort((a, b) => a.name > b.name) // Alphabetizes array
             })
             .catch(err => console.error(err))
    }

    render () {
        return (
            <section className='repos-container'>
                {this.state.reposData.map(repo => {
                    return (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                        >
                            <h2>{repo.name}</h2>
                        </a>
                    )
                })}
            </section>
        );
    }
}

export default Repos;