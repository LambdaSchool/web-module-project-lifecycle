import React from 'react';

import './UserSearch.css';

const UserCard = (props) => {

  const { search, update, submit } = props;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container-search'>
        <input type='text' placeholder='Search' name='search' value={search} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </div>
    </form>
  )

};

export default UserCard;
