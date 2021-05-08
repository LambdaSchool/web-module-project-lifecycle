import { Component }  from "react";
import { withRouter } from "react-router-dom";
import "../stylesheets/EnterUsername.css";

class EnterUsername extends Component {
    directToUser = () => {
        const { history } = this.props;
        if ( history ) history.push( "/user" );
    };
    formSubmit   = click => {
        click.preventDefault();
        this.props.renderUserCard();
        this.directToUser();
    };

    render () {
        return (
            <section className="gradient-border">
                <form className="enter-username-form" onSubmit={this.formSubmit}>
                    <h1 className="enter-username-header">Enter Your Github Username</h1>
                    <input
                        className="enter-username-input"
                        type="text"
                        value={this.props.usernameInput}
                        onChange={this.props.setUsername}
                        placeholder="username"
                    />
                    <button className="enter-username-submit-btn" type="submit">Get Info</button>
                </form>
            </section>
        );
    }
}

export default withRouter( EnterUsername );