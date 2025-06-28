import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocalLogin from '../socalLogin/SocalLogin';

const Login = () => {
const {register,handleSubmit,formState:{errors}}= useForm();

const onsubmit=data=>{
    console.log(data)
}


return (
     <div>
       <form onSubmit={handleSubmit(onsubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength:6})} className="input" placeholder="Password" />
          {
            errors.password?.type === "required" && (
        <p role="alert">First name is required</p>
          )}
          {
             errors.password?.type === "minLength" && (
        <p role="alert" className='text-red-500 text-xl'>length must be 6 charector</p>
          )
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <p><small>New to this website?<Link className='btn btn-link' to='/register'>Register</Link></small></p>
        <SocalLogin></SocalLogin>
       </form>
     </div>
    );
};

export default Login;