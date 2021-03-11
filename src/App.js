import React from 'react';
import axios from 'axios';
import User from './components/User.js';

export default function App() {
  return (
    <div>
      <h1>Github User Card</h1>
      <User />
      <Followers />
    </div>
  )
}
