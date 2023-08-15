import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { setToken } from '../../store/slices/tokenSlice';
import NavBar from '../../components/Navbar/Navbar'
const Home = () => {
  const navgivate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
      if(!localStorage.getItem("token"))  navgivate("/login");
      // eslint-disable-next-line
  }, [])
  
  return (
    <>
        <NavBar/>
        
    </>
  )
}

export default Home