import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import UseAuth from './UseAuth';

const PrivateRoute = ({ children }) => {
    let { user, isLooding } = UseAuth();
    console.log(isLooding)
    let location = useLocation();
    if (isLooding) {
        return <Spinner animation="border" variant="success" />
    }

    if (!user.email) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }




    return children;
};

export default PrivateRoute;