import React from 'react'
import { useSelector } from 'react-redux'
import { AuthButton, NavBar } from '../components'

function Profile() {
    const UserData = useSelector(state => state.auth.UserId)

    return (
        <div className="flex flex-col h-screen">
            {/* NavBar at the top */}
            <NavBar />

            
            <div className="flex flex-col gap-10 items-center mt-10 mx-10 flex-grow">
                <div className="text-custom-white font-bold text-4xl underline">
                    {UserData.name.toUpperCase()}:
                </div>
                <p className="text-custom-purple text-xl">{UserData.email}</p>
                
              
                <div className="mt-10">
                    {/* Add Blog or any other content here */}
                </div>
            </div>

            
            <div className="flex justify-center   items-center mt-auto mb-10">
                <AuthButton isProfle={true} />
            </div>
        </div>
    )
}

export default Profile
