
import { useState } from 'react'
import { useEffect } from 'react'
import { authService } from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import {loggIn,loggOut} from "./Features/authSlice"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {ErrorComp,RouteProtect,DotLoader} from "./components/index"
import {Dashbord, EditPost, LandingPage, LoginPage, Post, Profile, Publish, SignUpPage} from "./pages/index"



function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()
  
  
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
        
        dispatch(loggOut())
      }
      setLoading(false)
    }
    CheckUser()
  },[dispatch])
  const routes= createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>,
      errorElement:<ErrorComp/>

    },
    {
      path:"/Home",
      element:<Dashbord/>
     
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
    },
    {
      path:"/article/:id",
      element:<RouteProtect><EditPost/></RouteProtect>
    },
    {
      path:"/post/:id",
      element:<RouteProtect><Post/></RouteProtect>
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
