import React from 'react';
import {Route} from 'react-router-dom';
import Users from './users/pages/Users'
import './App.css';

function App() {
  return (
    <>
      <Route path="/" exact component={Users} />
    </>
  );
}

export default App;
