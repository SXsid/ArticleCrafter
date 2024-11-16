import React from 'react'
import MyEditor from '../components/TextEditor/Editor'
import { useForm } from 'react-hook-form'
import { NavBar } from '../components'
function Publish() {
    const {control} =useForm()
  return (
    <div className=''>
        <NavBar/>
      <MyEditor control={control} defaultValues='hi my naem sid'/>
    </div>
  )
}

export default Publish
