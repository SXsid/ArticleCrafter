
import { useState } from 'react'
import { useEffect } from 'react'
import { authService } from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import {loggIn,loggOut} from "./Features/authSlice"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {ErrorComp,RouteProtect,Card} from "./components/index"


import {Dashbord, LoginPage, Profile, SignUpPage} from "./pages/index"


function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()
  
  //we have user when app will load ?
  useEffect(()=>{
    const CheckUser=async()=>{
      try{
        const User= await authService.GetUser()
        if(User){
          dispatch(loggIn({UserId:User}))
        }else{
          throw new Error
        }
      }catch(e){
        // console.log(e);
        
        dispatch(loggOut())
      }
      setLoading(false)
    }
    CheckUser()
  },[])
  const routes= createBrowserRouter([
    {
      path:"/",
      element:<RouteProtect><Dashbord/></RouteProtect>,
      errorElement:<ErrorComp/>
    },
    {
      path:"/signin",
      element:<LoginPage/>
    },
    {
      path:"/signup",
      element:<SignUpPage/>
    },
    {
      path:"/profile",
      element:<RouteProtect><Profile/></RouteProtect>
    }
  ])

  return (
   
      <RouterProvider router={routes}>

    </RouterProvider>
    
  )
}

export default App
