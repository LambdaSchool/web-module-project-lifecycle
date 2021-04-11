import React from 'react';
//import App from '/App.js'; 

class UserForm extends React.Component {

    componentDidMount() {
        console.log('CDM');
    }

    componentDidUpdate() {
        console.log('CDU');
    }

    render() {
        console.log('User render working');
        console.warn(this.props)
        const { onButtonClick, onChange, loginName, gitHubUserData } = this.props;

        return(
            <div className='userInfo'>
                <img src={gitHubUserData.avatar_url} alt='image'/>
                <div>
                    <h3>{loginName}</h3>
                    <input
                        type='text'
                        value={loginName}
                        onChange={onChange}
                    />
                    <button onClick={onButtonClick}>Display Followers</button>
                </div>

            </div>
        );
    }
}

export default UserForm;
