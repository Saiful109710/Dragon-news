import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {logInUser,setUser} = useContext(AuthContext)
    const [error,setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleSubmit = (e)=>{
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            logInUser(email,password)
            .then((result)=>{
                setUser(result.user);
                navigate(location?.state ? location.state:'/')
                
                
            })
            .catch((err)=>{
                setError({...err,login:err.code})
            })
            
    }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full  max-w-sm shrink-0 rounded-none">
        <h2 className="text-2xl font-semibold text-center pt-5">Login your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
                error.login &&   <label className="label text-sm text-red-500">
                    {error.login}
              </label>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center pb-4">Dont’t Have An Account ? <Link className="text-red-500" to='/auth/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
