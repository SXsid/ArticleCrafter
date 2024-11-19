import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from '../components'


function Profile() {
    const UserData= useSelector(state=>state.auth.UserId)
    // console.log(UserData);
    
  return (
    <div>
        <NavBar/>
      <div className='flex gap-10 items-center mt-10 mx-10'>
        <div className='text-custom-white font-bold text-4xl underline'>
            
            {UserData.name.toUpperCase()}: 
        </div>
         <p className='text-custom-purple text-xl'>{UserData.email}</p>
        </div>
   

        
    </div>

  )
}

export default Profile
