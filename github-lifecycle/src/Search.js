import React, { useState, useEffect } from 'react'

export default function Search(props) {
    const [username, setUsername] = useState('');
    const { searchedUser } = props;

    const onChange = event => {
        setUsername(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()
        searchedUser(username)
    }
    useEffect(() => {
        console.log(username)
    },[username]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <input value={username} onChange={onChange} name="username" type="text" />
                </label>
                <button>Search</button>
                </form>        
        </div>
    )
}
