import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const navigate = useNavigate()
    const [error,setError] = useState({})
    const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get("name")
        if(name.length<5){
            setError({...error,name:'must be more than 5 character'})
            return;
        }
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')

        createNewUser(email,password)
        .then((result)=>{
            const user = result.user;
            
            setUser(user);
            updateUserProfile({displayName:name,photoURL:photo})
            .then(()=>{
                navigate('/')
            })
            .catch()
            
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode,errorMessage)
        })
    }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full  max-w-sm shrink-0 rounded-none">
        <h2 className="text-2xl font-semibold text-center pt-5">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          
          {
            error.name && <label className="label text-xs text-red-500">
            {error.name}
          </label>
          }
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name='photo'
              placeholder="Photo"
              className="input input-bordered"
              required
            />
          </div>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center pb-4">
          Already have an account.
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
