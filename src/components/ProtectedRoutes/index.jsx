import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {

  const { user, refreshing } = useContext(AuthContext);
  const location = useLocation();

  

  if(refreshing){
    return null
  }

  return (
   
    user ? <Outlet/> : <Navigate to='/' replace={true} state={{from: location}}/>

  )
}

export default ProtectedRoutes;