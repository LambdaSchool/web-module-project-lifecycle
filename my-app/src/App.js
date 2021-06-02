import axios from 'axios';
import React from 'react';
import User from "./components/User"
import Followers from "./components/Followers"

//  [ ] Fetch data from the Github API for a Github user
//  [ ] Display the user data on the DOM
//  [ ] Use class components when you need to hold any state or use any lifecycle methods




class App extends React.Component {








render() {
  return (
    <div className="Users">
    
   
     <User/>
     <Followers/>

    </div>
  );
}
}

export default App;
