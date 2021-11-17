import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <CircularProgress />;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;

  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       user.email && admin ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: '/',
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
};

export default AdminRoute;
