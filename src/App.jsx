
import { useState } from 'react'
// import './App.css'
import { useEffect } from 'react'
import { authService } from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import {loggIn,loggOut} from "./Features/authSlice"
import ArticleSkeleton from './components/Skeletons/articleSkeleton'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()
  //we have user?
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
        console.log(e);
        
        dispatch(loggOut())
      }
      setLoading(false)
    }
    CheckUser()
  },[])

  return (
    <>
      {loading &&<ArticleSkeleton/>}
      {!loading &&<div>hello ji </div>}
    </>
  )
}

export default App
