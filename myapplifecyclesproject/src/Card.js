const Card = (props) => {
    return (
      <div className='card'>
        <h1>Name: {props.users.name}</h1>
        <h2>Type: {props.users.type}</h2>
        <h2>Joined: {props.users.created_at}</h2>
        <h2>Repositories: {props.users.public_repos}</h2>

        <div className='following'>
            <h3>Followers: {props.following.length}</h3>
        </div>
      </div>
    );
  };

  export default Card;