import React from 'react'
import axios from 'axios'
import Card from './component/Card'

class App extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
      this.state = {
        newUser: '',
        user: {}
           }
     }

  componentDidMount(){
    axios.get('https://api.github.com/users/Ackerie')
    .then(responce => this.setState({...this.state, user:responce.data}))
    .catch(err => console.log(err, 'opps somethings not right'))
  }
  
  
  
  getUser = () => {
  axios.get(`https://api.github.com/users/${this.state.newUser}`)
    .then(responce => this.setState({...this.state, user:responce.data}))
    .catch(err => console.log(err, 'opps somethings not right'))
  }

  handlechanges = e => {
    this.setState({
      ...this.state,
      newUser: e.target.value
    })
    
  }

   render() {
     return(
       <div>
         <h1>GitHub UserCards</h1>
          <input 
          type="text"
          value={this.state.newUser}
          onChange={this.handlechanges}
          />
          <button onClick={this.getUser}>Get UserCards</button>

         <Card user={this.state.user} />

          </div>
          
            
         
       
     )
   }
}
export default App;
