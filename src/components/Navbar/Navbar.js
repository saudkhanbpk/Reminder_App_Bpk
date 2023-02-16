import React from "react";
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
export default function Naavbar({ setToken, setGoogleToken }) {
  let navigate = useNavigate()
  const handleClick = () => {
    localStorage.clear();
    navigate("/login")
    setGoogleToken(null)

  }
  const handleClear = () => {
    localStorage.clear();
    navigate("/login")
    setToken(null)
  }
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <h6>
              Reminder App
            </h6> </Navbar.Brand>
          <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/')}><h6>Home</h6></Nav.Link>
            </Nav>
            <span> < FiSettings /></span>
            {
              localStorage.getItem("email") ? (
                <button className="btnd" onClick={handleClick} >Logout</button>
              ) : (
                null
              )
            }
            {
              localStorage.getItem("loginToken") ? (
                <button className="btnd" onClick={handleClear}>Logout</button>
              ) : (
                null
              )
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  )
}