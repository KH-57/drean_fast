import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const Routes = ({children}) => {
    const {user,loading}=useAuth();

    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    } 
    if(!user){
        <Navigate to='/login'></Navigate>
    }
    return children;
};

export default Routes;