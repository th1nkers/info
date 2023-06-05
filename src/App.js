import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { useAuth } from './shared/hooks/auth-hook'
import { AuthContext } from './shared/context/auth-context';
import Home from './docs/pages/Home';
import Users from './user/pages/Users';
import Apply from './docs/pages/Apply';
import Notify from './docs/pages/Notify';
import Auth from './user/pages/Auth';
import UserDocs from './docs/pages/UserDocs';

function App() {

  const { isLoggedIn, login, logout } = useAuth();

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/explore" exact>
          <Users />
        </Route>
        <Route path="/apply" exact>
          <Apply />
        </Route>
        <Route path="/notify" exact>
          <Notify />
        </Route>
        <Route path="/:userId/docs" exact>
          <UserDocs/>
        </Route>
      </Switch>
    );
  } else {
    routes = (<Switch>
      <Route path="/explore" exact>
        <Users />
      </Route>
      <Route path="/apply" exact>
        <Apply />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Route path="/:userId/docs" exact>
        <UserDocs/>
      </Route>
      <Route path="/:docId" exact>
        details docs
      </Route>
      <Redirect to="/auth" />
    </Switch>)
  }

  return (
    <AuthContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
      }
    }>
      <section>
        <Router>
          <nav><MainNavigation /></nav>
          <main>
            {routes}
          </main>
          <footer>3rd column</footer>
        </Router>
      </section>
    </AuthContext.Provider >

  );
}

export default App;
