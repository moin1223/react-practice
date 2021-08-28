
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Route,Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const[loggedInUser,SetLoggedInUser]=useContext(UserContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;