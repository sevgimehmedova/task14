import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { isAuthenticated } from './your-authentication-helper'; // Replace with your authentication logic

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
