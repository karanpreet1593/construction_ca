import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';

const ProtectedRoutes = () => {
    // const {currentUser} = useContext(userContext)
  
  return(
    (true) ? <Outlet/> : <Navigate to='/' />
  )
};

export default ProtectedRoutes