import React from 'react';
import {  Route , Redirect} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){return <Spinner animation="border" variant="success"></Spinner> }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.uid ? (
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