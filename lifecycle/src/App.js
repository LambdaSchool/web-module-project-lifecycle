import React from 'react';
import User from './Component/User';
import Followers from './Component/Followers';

function App(){
  return(
    <div>
    <h1>Github User Card</h1>
      <User/>
      <Followers/>
    </div>
  )
}

export default App;
