
import { useState } from 'react'
// import './App.css'
import { useEffect } from 'react'
import { authService } from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import {loggIn,loggOut} from "./Features/authSlice"
// import ArticleSkeleton from './components/Skeletons/articleSkeleton'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteProtect from './components/ProectionComp/RouteProtect'
import Card from './components/Card/Card'
import {Dashbord} from "./pages/index"

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
      element:<Dashbord/>
    },
    {
      path:"/signin",
      element:<div><Card/></div>
    }
  ])

  return (
   
      <RouterProvider router={routes}>

    </RouterProvider>
    
  )
}

export default App
