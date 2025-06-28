import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';


const Register = () => {
    const {createUser}=useAuth();

    const {register,handleSubmit ,formState:{errors}}=useForm();

    const onSubmit=data=>{
        console.log(data)

        createUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl'>create an account!</h1>
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input"
                     placeholder="Email"
                    {...register('email')}
                    />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password"
                    {...register('password',{required:true ,minLength:6})}
                    />
                    {
                        errors.password?.type === 'required' && <p className='text-red-400 text-xl'>
                            password must be requerd
                        </p>
                    }
                     {
                        errors.password?.type === 'minLength' && <p className='text-red-400 text-xl'>
                            password must be 6 charector
                        </p>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary mt-4 text-black">Register</button>
                 </fieldset>
                 <p><small>Already have an account ?<Link to='/login' className='btn btn-link'>Login</Link></small></p>
            </form>
        </div>
    );
};

export default Register;