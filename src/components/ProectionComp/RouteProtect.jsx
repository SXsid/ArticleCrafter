import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function RouteProtect({children}) {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    // console.log(UserData);
    
    if(!isLoggedIn){
        return <Navigate replace={true} to={"/signin"}></Navigate>
        
    }else{
        return <div>{children}</div>
    }
}

export default RouteProtect
