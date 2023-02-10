import React from "react";
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
export default function Naavbar() {
  let navigate = useNavigate()
  const handleClick = () => {
    localStorage.clear();
    navigate("/")

  }
  const handleClear =()=>{
    localStorage.clear();
    navigate("/")
  }
  return (
    <div>
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Reminder App</Navbar.Brand>
          <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
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