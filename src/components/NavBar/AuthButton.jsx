import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  loggOut } from '../../Features/authSlice'
import { authService } from '../../Appwrite/auth'
import {  useNavigate,  } from 'react-router-dom'


function AuthButton() {
    const isloggedIn = useSelector(state=>state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
  return (
    <div>
      <button  
      className='bg-[#0b0a0a94] z-10 shadow-sm border-custom-purple border w-28 h-14 rounded-full font-bold hover:scale-105 translate-x-1 text-xl font-inter text-white'
      onClick={ async()=>{
        if(isloggedIn){
            await authService.LogOut()
            dispatch(loggOut())
            return
        }else{
            navigate("/signup")
        }
      }}>{isloggedIn?"LogOut":"LogIn"}</button>
    </div>
  )
}

export default AuthButton
