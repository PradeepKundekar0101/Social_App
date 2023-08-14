import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../../store/slices/modeSlice';
import { FaBell, FaMoon, FaSun, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css';

const NavBar = () => {
  const mode = useSelector((state) => state.mode);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

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
          {!token ? (
            <div className="auth-btns">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          ) : (
            <NavDropdown title="User Name" id="navbarDropdown">
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Something else here</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
