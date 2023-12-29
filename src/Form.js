import React, { useState } from 'react';
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

    const [password, setPassword] = useState(true);
    const togglePassword =()=>{
      setPassword(!password);
    }

    return ( 
    <div className='form-div'>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>Sign Up</h2>
        {/* Username */}
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

        {/* Email */}
        <input placeholder='abc@xyz.com' type="email" {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i ,
          message: "Enter valid Email",
        },
      })}
      />
      <p>{errors.email?.message}</p>

      {/* Password */}
      <div style={{width:'85%'}}>
      <input placeholder='Password' type={ password ? 'password':'text' } {...register("password", {
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
      {password? <button onClick={togglePassword} className='toggle'>Show</button> : <button onClick={togglePassword} className='toggle'>Hide</button>}
      </div>
      <p>{errors.password?.message } </p>

      {/* Gender */}
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
    