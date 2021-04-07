import React from 'react';

class UserForm extends React.Component {
    render() {
        return (
        <form onSubmit={this.props.handleSubmit}>
            <input 
                value={this.props.username}
                onChange={this.props.handleChange}
                placeholder="Search By UserName"
            />
            <button>Search GitHub!</button>
        </form>
        );
    }
}

export default UserForm;