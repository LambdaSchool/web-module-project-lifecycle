import { Component }     from "react";
import { Route, Switch } from "react-router-dom";
import EnterUsername     from "./components/EnterUsername";
import Nav               from "./components/Nav";
import UserCard  from "./components/UserCard";
import Followers from "./components/Followers";
import Repos     from "./components/Repos";
import "./stylesheets/App.css";

class App extends Component {
    constructor () {
        super();
        this.state = {
            usernameInput: "",
            userData: [],
            formSubmit: false,
        };
    }

    setUsername    = input => {
        this.setState( { ...this.state.usernameInput, usernameInput: input.target.value } );
    };
    setUserData    = res => {
        this.setState( { ...this.state.userData, userData: res.data } );
    };
    renderUserCard = () => {
        this.setState( { ...this.state.formSubmit, formSubmit: !this.state.formSubmit } );
    };
    resetApp = () => this.setState({...this.state, usernameInput: "", userData: [], formSubmit: false})

    render () {
        return (
            <Switch>
                {this.state.formSubmit === false
                 ? <Route exact path='/'>
                    <EnterUsername
                     usernameInput={this.state.usernameInput}
                     setUsername={this.setUsername}
                     formSubmit={this.state.formSubmit}
                     renderUserCard={this.renderUserCard}
                 />
                 </Route>
                 : <>
                     <Nav
                         resetApp={this.resetApp}
                         username={this.state.userData.login}
                     />

                         <Route exact path='/user'>
                             <UserCard
                                 usernameInput={this.state.usernameInput}
                                 setUsername={this.setUsername}
                                 userData={this.state.userData}
                                 setUserData={this.setUserData}
                             />
                         </Route>
                         <Route exact path='/followers'>
                             <Followers followersUrl={this.state.userData.followers_url}/>
                         </Route>
                         <Route exact path='/repos'>
                             <Repos reposUrl={this.state.userData.repos_url}/>
                         </Route>
                 </>
                }
            </Switch>
        );
    }
}

export default App;
