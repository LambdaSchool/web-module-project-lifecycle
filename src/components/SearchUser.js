import axios from 'axios';
import React from 'react'

class SearchUser extends React.Component {

    constructor(){
        super();
        this.state = {
            
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.get('')
    }

    render(){
        return (
            <form>
                <input 
                onChange={this.handleChange}
                type='text'
                name='search'
                />
                <button>Search</button>
            </form>
        )
    }
}

export default SearchUser