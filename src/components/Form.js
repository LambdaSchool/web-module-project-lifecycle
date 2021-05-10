import React from "react";

class UserForm extends React.Component {
        constructor() {
                super();
                this.state = {
                        input: '',
                }
        }
        handleChanges = e => {

                this.setState({
                        input: e.target.value
                });
        };

        handleSubmit = (e) => {
                e.preventDefault();
                this.props.addTask(this.state.input);
        }

        render() {
                return (
                        <form >
                                <input onChange={this.handleChanges} type="text" name="item" />
                                <button onClick={this.handleSubmit}>Check</button><br />
                                <button onClick={this.props.clearCompleted}>Clear Completed</button>
                        </form>
                );
        }
}
export default UserForm;