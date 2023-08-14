import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import NavBar from '../../components/Navbar/Navbar'
import { useSelector } from 'react-redux'
const Login = () => {
    const mode = useSelector((state)=>{ return state.mode });
  return (
    <>
        <NavBar/>
        <div className="body-login" id={mode==="light"?"body-light":"body-dark"}>
        <div className="form-container-login" id={mode==="light"?"form-light":"form-dark"}>
            <h1>Login</h1>
            <form action="">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Enter your email' />
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='Enter your password'/>
            <input type="submit" value='Login'/>
            <Link to="/register">Create a new account</Link>
            </form>
        </div>
        </div>
       
    </>
  )
}

export default Login