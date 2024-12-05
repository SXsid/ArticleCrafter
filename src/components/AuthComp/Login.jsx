import React, { useRef } from 'react';
import { CustomInput, Button } from '../index';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {authService} from "../../Appwrite/auth"
import {loggIn} from "../../Features/authSlice"
import { zodResolver } from '@hookform/resolvers/zod';
import {loginSchema} from "./Schema"
import { Link, useNavigate } from 'react-router-dom';



function Login() {
  const emailRef=useRef()
    const passRef=useRef()
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const {register,formState:{errors,isSubmitting},setError ,handleSubmit}=useForm({
        defaultValues:{
            email:"",
            password:""
        },
        resolver:zodResolver(loginSchema)
    })
    
    const loginHandle=async(data)=>{
        
        
        try{
            
            const session =await authService.Login(data)
            if(session){
                
                
                const UserData= await authService.GetUser()
               
                
                if(UserData){
                    dispatch(loggIn({UserId:UserData}))
                    navigate("/home")
                }else{
                  setError("root",{message:"plzz login again"})
                  navigate("/signin")
                    
                }   
            }
            else{
                setError("root",{message:"plzz check credentials.."})
            }
        }catch(e){
            setError("root",{message:"error while logging in "})
           

        }
    }

    const InputClass =
    'w-full bg-transparent border border-custom-white rounded-xl h-10 outline-none text-white text-xl font-inter font-extralight px-4 ';
  return (
    <form onSubmit={handleSubmit(loginHandle)} className='flex justify-center items-center min-h-[calc(100vh-60px)] w-full'>
        
      <div className='bg-[#00000054] backdrop-blur-sm p-6   lg:p-10 rounded-2xl z-10 lg:w-[550px] w-[400px] mx-4'>
      {errors.root && <div className='text-red-600'>{errors.root?.message}</div>}
        <h1 className='text-center mb-7 text-white text-2xl font-bold'>SigIn to your Account</h1>
        
        
        <div className='flex flex-col   '>
          
          <CustomInput ref={emailRef} type="text" placeholder={"Enter your Email" }className={InputClass} {...register("email")} label="Email" />
          {errors.email &&<div className='text-red-600'>{errors.email?.message}</div>}
          
          
          <CustomInput  ref={passRef} className={InputClass} label="Password" {...register("password")} />
          {errors.password &&<div className='text-red-600'>{errors.password?.message}</div>}
        
        
        </div>
        
        
        <div className='flex justify-center  mt-4 '>
          <Button disabled={isSubmitting} className={`text-white text-xl bg-[#100f0fa7] rounded-xl hover:text-custom-purple`}>
            {isSubmitting?"loading":"login"}
          </Button>
          
        </div>
        
        <div className='text-center mt-2 mx-2 text-custom-white'>Don't have an Account?       <Link to={"/signup"} className='text-custom-purple underline'>SignUp</Link>
        </div>
       
      </div>
      
    </form>
  );
}

export default Login;
