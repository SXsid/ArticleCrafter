import {z} from "zod"
export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string(),

})

export const SignupSchema = z.object({
  name:z.string(),
  email:z.string().email(),
  password:z.string().min(8)
  .refine((value)=>/[a-z]/.test(value),{
    message:"must have a smaller case letter"
    }
  ).refine(value=>/[A-Z]/.test(value),{
    message:"must have Upper case"
  })
  .refine(value=>/[0-9]/.test(value),{
    message:"must have a digit.."
  })

  


})