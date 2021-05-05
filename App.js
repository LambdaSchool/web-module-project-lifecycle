import React from 'react';
import axios from 'axios';
import './styles.css';
import Followers from './Followers'

class App extends React.Component {
    state = {
        gitHub: [],
        user: 'cynthiaannberg'
    }
}

componentDidMount() {
    axios.get('https://api.github.com/users/cynthiaannberg')
        .then(resp=> {
            this.setState({
                gitHub: resp.data.message
            });
        })
        .catch(err => {
            console.log(err);
        });
}





componentDidUpdate(prevProps, prevState) {
    if (prevState.dogImages !== this.state.gitHub) {
        if (this.state.user === 'cynthiaannberg') {
            axios.get('ttps://api.github.com/users/cynthiaannberg/followers')
                .then(resp=> {
                    this.setState({
                        gitHub: resp.data.message,
                        user: "cynthiaannberg"
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
}




handleFormChange = (e)=>{
    this.setState({
        user: e.target.value
    });
}

handleFormSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/cynthiaannberg/followers)
        .then(resp=> {
            this.setState({
                gitHub: resp.data.message
            })
        })
        .catch(err=>{
            console.log(err);
        });
}







render() {
    return(<div>
        <h1>Git Hub User Data</h1>

        <form onSubmit={this.handleFormSubmit}>
                <input value={this.state.user} onChange={this.handleFormChange}/>
                <button>Fetch User Data</button>
            </form>

            <div>
                {
                    this.state.gitHub.map(image=> {
                        return <img key={image} width='200' src={image} alt={image}/>
                    })
                }
            </div>


    </div>)
}

export default App;