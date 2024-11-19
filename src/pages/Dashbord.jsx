import React, { useEffect, useState } from 'react'
import {Card, NavBar} from "../components/index"
import dbService from '../Appwrite/DbServices'
function Dashbord() {
  const [Articles,setAritcles]=useState([])
  useEffect(()=>{
    const dataFetch=async()=>{
      const data= await dbService.RetriveAllPosts()
      if(data){
        setAritcles(data.documents)
      }
    }
    dataFetch()
  },[])
  return (
    <div>
        <NavBar/>
        <div className='grid lg:justify-center grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-col  lg:items-center mt-12  gap-7 mx-8'>
        {Articles.map((article)=>{
          return(
            <div key={article.$id} className='hover:scale-105  transition-all duration-300'>
              <Card thumbnail_Id={article.thumbnail_Id} content={article.content} title={article.title} userName={article.userName} date={article.date} $id={article.$id}/>
            </div>
          )
        })}
        </div>
      
    </div>
  )
}

export default Dashbord
