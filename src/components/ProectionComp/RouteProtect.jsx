import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function RouteProtect({children}) {
    const UserId = useSelector(state=>state.auth.UserId)
    console.log("hi ther ");
    
    if(!UserId){
        return <Navigate to={"/signin"}></Navigate>
        
    }else{
        return <div>{children}</div>
    }
}

export default RouteProtect
