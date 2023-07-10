import React from 'react';
import { useForm } from "react-hook-form";
// https://www.youtube.com/watch?v=9LwETbBytJ0
export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
      mode: "all"
    });
    // mode: all allows checking onBlur of i/p field
    const onSubmit = (data) => {
      alert('SUCCESS!! \n' + JSON.stringify(data, null, 4));
      return false;

    }
    return (
        
    <div className='form-div'>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>Sign Up</h2>
        <input placeholder='Username' type="text" {...register('username',{
          required:'Username is required',
          minLength:{
            value:3,
            message:'Username must be atleast 3 characters long'
          },
          maxLength:{
            value:15,
            message:'Username must be atmost 15 characters long'
          },
        })} />
        <p>{errors.username?.message}</p>
        <input placeholder='sayhii@yahoo.com' type="email" {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i ,
          message: "Enter valid Email",
        },
      })}
      />
      <p>{errors.email?.message}</p>
      <input placeholder='AahaUuhu' type="password" {...register("password", {
        required: "Password is required",
        // required: true,
        // minLength: 5,
        // maxLength: 20,
        pattern:{
          value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/ ,
          message:
          "Password must have minimum 6 chars, 1 uppercase, 1 lowercase, 1 number & 1 special case",
        },
      })}
      
      />
      <p>{errors.password?.message } </p>
      <select {...register('gender',{
        required: 'Gender is required',
      })}>
        <option value="">--Select Gender--</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
      <p>{errors.gender?.message } </p>
      <button>Submit</button>
      </form>
    </div>
    )
    }
    