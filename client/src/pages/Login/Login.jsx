import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import NavBar from '../../components/Navbar/Navbar'
import { useSelector,useDispatch } from 'react-redux';
import {setToken} from '../../store/slices/tokenSlice'
import {setUser} from '../../store/slices/userSlice'
const Login = () => {
    const mode = useSelector((state)=>{ return state.mode });
    const dispatch = useDispatch();
    const [formDetails,setformDetails] = useState({ email:"",password:"" });
    const handleLoginSubmit = async(e)=>{
      console.log(formDetails)
      try {
        const response = await fetch("http://localhost:8000/auth/login",{
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body: JSON.stringify(formDetails)
      });
      const json =await response.json();
      dispatch(setToken(json.token));
      dispatch(setUser(json.userFound));
      
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
        <NavBar/>
        <div className="body-login" id={mode==="light"?"body-light":"body-dark"}>
        <div className="form-container-login" id={mode==="light"?"form-light":"form-dark"}>
            <h1>Login</h1>
            
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              placeholder='Enter your email'
              value={formDetails.email}
              onChange={(e)=>{setformDetails({...formDetails,email:e.target.value});}}
            />
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              placeholder='Enter your password'
              value={formDetails.password}
              onChange={(e)=>{setformDetails({...formDetails,password:e.target.value});}}
            />
            <button onClick={()=>{handleLoginSubmit()}}>Login</button>
            <Link to="/register">Create a new account</Link>
            
        </div>
        </div>
       
    </>
  )
}

export default Login