import React, { useState, useCallback } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import UserPlace from './places/pages/UserPlace'
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './context/Auth-Context';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import './App.css';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const login = useCallback(() => {
    setIsloggedIn(true)
  }, []);

  const logout = useCallback(() => {
    setIsloggedIn(false)
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" exact component={UserPlace} />
        <Route path='/places/new' exact component={NewPlace} />
        <Route path='/places/:placeId' exact component={UpdatePlace} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" exact component={UserPlace} />
        <Route path='/auth' exact component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <MainNavigation />
        <main>
            {routes}
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
