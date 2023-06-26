import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import ReactReloadSpinier from '../../Animation/ReactReloadSpinier'
const RequireAuth = ({ children }) => {

 const [user, loading] = useAuthState(auth)
 const location = useLocation();
 
 if (loading) {
  return <ReactReloadSpinier></ReactReloadSpinier>
 }
 if (!user) {
  return <Navigate to='/login' state={{ from: location }} replace />
 }
 return children;
};

export default RequireAuth;