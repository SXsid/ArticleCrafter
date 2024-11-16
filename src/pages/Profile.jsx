import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from '../components'


function Profile() {
    const UserData= useSelector(state=>state.auth.UserId)
    console.log(UserData);
    
  return (
    <div>
        <NavBar/>
        <div className='text-custom-white font-bold text-4xl underline'>
        
        {UserData.name.toUpperCase()}
    </div>
    <p className='text-custom-purple'>{UserData.email}</p>

        
    </div>

  )
}

export default Profile
