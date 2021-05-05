import React from 'react';

import './UserCard.css';

const UserCard = (props) => {

  const { data } = props;

  const { avatar_url, followers, following, html_url, id, login, name, location, public_gists, public_repos } = data;

  return (
    <div>
      <div className='container-card'>
        <section className='image'>
          <a href={avatar_url}>
            <img src={avatar_url} />
          </a>
        </section>
        <section className='card'>
          <p>Username: <a href={html_url}>{login}</a></p>
          <p>Identification: {id}</p>
          <p>Name: {name}</p>
          <p>Location: {location}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Gists: {public_gists}</p>
          <p>Repos: {public_repos}</p>
        </section>
        <section className='graph'>
          <a href={`https://grass-graph.moshimo.works/images/${login}.png`}>
            <img src={`https://grass-graph.moshimo.works/images/${login}.png`} />
          </a>
        </section>
      </div>
    </div>
  )

};

export default UserCard;
