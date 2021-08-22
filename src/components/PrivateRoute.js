import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="signin" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
