
import { useState } from 'react'
import { useEffect } from 'react'
import { authService } from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import {loggIn,loggOut} from "./Features/authSlice"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {ErrorComp,RouteProtect,DotLoader} from "./components/index"
import {Dashbord, LoginPage, Profile, Publish, SignUpPage} from "./pages/index"



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
  },[dispatch])
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
    },
    {
      path:"/publish",
      element:<RouteProtect><Publish/></RouteProtect>
    }
  ])
  if(loading){
    return <DotLoader/>
  }

  return (
   
      <RouterProvider router={routes}>

    </RouterProvider>
    
  )
}

export default App
