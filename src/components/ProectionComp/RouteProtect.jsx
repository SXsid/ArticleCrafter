import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function RouteProtect({children}) {
    const UserData = useSelector(state=>state.auth.UserId)
    console.log(UserData);
    
    if(!UserData){
        return <Navigate replace={true} to={"/signin"}></Navigate>
        
    }else{
        return <div>{children}</div>
    }
}

export default RouteProtect
