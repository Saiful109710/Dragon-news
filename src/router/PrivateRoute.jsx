import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation()
   
    const {user,loading} =useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
            return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
