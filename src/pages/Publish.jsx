import React from 'react'
import { useForm } from 'react-hook-form'
import { NavBar, PublishForm } from '../components'
function Publish() {
    const {control} =useForm()
  return (
    <div className=''>
        <NavBar/>
        <PublishForm/>
    </div>
  )
}

export default Publish
