import React from 'react';
import UserCard from './UserCard'


const userCardList = [];

function UserCardList(props) {
    return (
        <div className = "userCard">
            {props.userCard.map(userCard =>
                <UserCard usercard={userCard} />
            )};
        </div>
    )
}


// function Pokemon(props) {
//     return (
//       <>
//         {props.pokemon.map(pokemon => (
//           <Poki pokemon={pokemon}/>
//         ))}
//       </>
//     );
//   }