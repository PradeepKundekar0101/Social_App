import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../../store/slices/modeSlice';
import { FaBell, FaMoon, FaSun, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import { removeToken } from '../../store/slices/tokenSlice';
import { removeUser } from '../../store/slices/userSlice';
const NavBar = () => {
  const mode = useSelector((state) => state.mode);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayAuth = ()=>{
    if(user) 
      return <NavDropdown title={user.firstname+" "+user.lastname} id="navbarDropdown">
      <NavDropdown.Item onClick={()=>{dispatch(removeToken());dispatch(removeUser());navigate("/login")}}>LogOut</NavDropdown.Item>
    </NavDropdown>
  return <div className="auth-btns">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </div>
}
  return (
    <Navbar
      className={
        mode === 'light'
          ? 'navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-between'
          : 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between'
      }
      expand="lg"
    >
      <Navbar.Brand href="/">Social App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto" id={mode === 'light' ? 'icons' : 'dark-icons'}>
          <Nav.Item>
            <Button onClick={() => dispatch(changeMode())}>
              {mode === 'light' ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button>
              <FaEnvelope />
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button>
              <FaBell />
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button>
              <FaQuestionCircle />
            </Button>
          </Nav.Item>
        </Nav>
        <Nav id="auth">
          {displayAuth()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
