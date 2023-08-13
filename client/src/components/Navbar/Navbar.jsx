import React from 'react'

import {useSelector,useDispatch} from 'react-redux';
import { changeMode } from '../../store/slices/modeSlice';
import {FaBell,FaMoon,FaSun,FaEnvelope,FaQuestionCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  const mode = useSelector((state)=>{ return state.mode });
  const token = useSelector((state)=>{return state.token});
  const dispatch = useDispatch();
  
  return (
      <nav  className= {mode==="light"? "navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-between":"navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between"}>
      <a className="navbar-brand" href="/">Social App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto "  id={mode==="light"?"icons":"dark-icons"}>
          
          <li className="nav-item">
            <button onClick={()=>{dispatch(changeMode())}}> {mode==="light"? <FaSun/>:<FaMoon/>}</button>
          </li>
          <li className="nav-item">
            <button> <FaEnvelope/></button>
          </li>
          <li className="nav-item">
            <button> <FaBell/></button>
          </li>
          <li className="nav-item">
            <button> <FaQuestionCircle/></button>
          </li>
    </ul>
    <ul id="auth">
          {
            !token? <div className='auth-btns'>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
            :
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User Name
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
      

          }
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
      </nav>
    
  )
}

export default Navbar