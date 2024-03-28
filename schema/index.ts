import * as z from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid e-mail address."
    }),
    name: z.string().min(1,{
        message:"Enter your name."
    }),
    password: z.string().min(6,{
        message: "Password must be 6 characters long."
    }),
    confirmPassword: z.string().min(6,{
        message:"Password must be 6 characters long."
    })
}).refine((data)=>{
    return data.password == data.confirmPassword
},{
    message: "Password do not match",
    path: ["confirmPassword"]
})

export const LoginSchema = z.object({
    email: z.string().email({
        message:"Please enter your email."
    }),
    password: z.string().min(6,{
        message:"Password must be 6 characters long."
    })
})