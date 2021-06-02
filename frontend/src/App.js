import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path='/places/new' exact component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
