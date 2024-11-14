import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider'

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  return (
    <div className='flex justify-between items-center'>
            <div className=''>{user && user.name}</div>
            <div className='space-x-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
              {
                user && user?.email ? (
                  <div>
                    <img className='w-10 h-10' src={user?.photoURL} alt="" />
                    <p>{user.displayName}</p>
                  </div>
                  

                ):
                <img src={userIcon} alt="" />
              }
                
                {
                  user && user?.email ? <Link onClick={logOut} className='btn btn-neutral rounded-none'>LogOut</Link>:<Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link>
                }
                
            </div>
    </div>
  )
}

export default Navbar
