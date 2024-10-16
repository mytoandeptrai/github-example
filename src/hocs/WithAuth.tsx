import React from 'react';
import { Navigate } from 'react-router-dom';


const WithAuth = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
  
  return (props: P) => {
    const isAuthenticated = localStorage.getItem('authToken'); 

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
};

export default WithAuth;

