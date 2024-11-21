import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import { SignupSchema } from './Schema';
import {Button, CustomInput} from "../index"
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../Appwrite/auth';
import { useDispatch } from 'react-redux';
import { loggIn } from '../../Features/authSlice';

function SignUp() {
  const emailRef =useRef()
  const passRef=useRef()
  const nameRef =useRef()
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const {formState:{errors,isSubmitting},handleSubmit,setError,register} = useForm({
    defaultValues:{
      name:"",
      email:"",
      password:""
    },
    resolver:zodResolver(SignupSchema)
  })
  
  const SignupHandle=async(data)=>{
    try{
      const Session = await authService.CreateAccount(data)
      
      if(Session){
        const UserData= await authService.GetUser()
        if(UserData){
          dispatch(loggIn({UserId:UserData}))
          navigate("/")
        }else{
          setError("root",{message:"plzz login again"})
          navigate("/signin")
        }   
      }else{
        setError("root",{message:"plzz check credentials.."})
      }
    }catch(e){
      
      setError("root",{message:e.message||"Error while singup"})
    }

  } 
  const InputClass =
  'w-full bg-transparent border border-custom-white rounded-xl lg:h-10 h-8 outline-none text-white text-xl font-inter font-extralight px-4';
  return (
    <form autoComplete='off'  onSubmit={handleSubmit(SignupHandle)}>
        <div className='bg-[rgba(0,0,0,0.33)] backdrop-blur-sm p-6  lg:p-10 rounded-2xl z-10 lg:w-[550px] w-[350px] '>
       
       {errors.root && <div className='text-red-600'>{errors.root?.message}</div>}
        
        <h1 className='text-center mb-7 text-white text-2xl font-bold'>
            SigUp to your Account

        </h1>
        
        <div className='flex flex-col   '>
       
          <CustomInput 
          ref={nameRef} 
          type="text" 
          placeholder={"Enter Name" }
          className={InputClass} 
          {...register("name")} label="Full Name" />

          <CustomInput
           ref={emailRef} 
           type="text" 
           placeholder={"Enter your Email" }
           className={InputClass}
            {...register("email")}
             label="Email" />
          
          {errors.email &&<div className='text-red-600'>{errors.email?.message}</div>}
          
          
          <CustomInput 
           ref={passRef} 
           className={InputClass} 
           label="Password" 
           {...register("password")} />
          
          {errors.password &&<div className='text-red-600'>{errors.password?.message}</div>
          }

          <div className='flex justify-center  mt-4 '>
            <Button 
            disabled={isSubmitting} 
            className={`text-white text-xl bg-[#100f0fa7] rounded-xl hover:text-custom-purple`}>
            {isSubmitting?"loading":"Signup"}
            </Button>
          
          </div>
        
          <div className='text-center mt-2 mx-2 text-custom-white'>
            Already have an Account?       
            <Link 
              to={"/signin"} 
              className='text-custom-purple underline'>
              Signin</Link>
          </div>
         </div>
       </div>

    </form>
  )
}

export default SignUp
