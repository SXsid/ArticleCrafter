import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  loggOut } from '../../Features/authSlice'
import { authService } from '../../Appwrite/auth'
import {  useNavigate,  } from 'react-router-dom'
import { motion } from 'framer-motion'



const AuthButton = () => {
  const isloggedIn = useSelector(state=>state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <motion.div
      className="relative lg:inline-block hidden  "
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-1 rounded-full "
        style={{
          background: "linear-gradient(90deg, #B794F4, #FED7E2, #B794F4)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "200% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <button
      className="relative px-8 py-3 bg-[#1A1625] rounded-full text-pink-100 font-semibold hover:scale-110"  onClick={ async()=>{
        if(isloggedIn){
            await authService.LogOut()
            dispatch(loggOut())
            return
        }else{
            navigate("/signin")
        }
      }}>{isloggedIn?"LogOut":"LogIn"}</button>
      
    </motion.div>
  );
};
export default AuthButton
