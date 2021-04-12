   import React, {Component}  from 'react' ;
   class GithubUserCard extends Component{
       render(){
           return(
            <div>
            <h2>Github User: {this.state.name}</h2>
              <img src={this.state.imgUrl} alt= "" />
              <p> followers: {this.state.followers}</p>
           </div>
           )
       }
   }  
        
export default GithubUserCard;