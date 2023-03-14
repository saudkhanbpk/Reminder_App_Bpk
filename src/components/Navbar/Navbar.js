import React from "react";
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
export default function Naavbar({ setToken, setGoogleToken, setPhoneId }) {
  let navigate = useNavigate()
  const handleClick = () => {
    localStorage.clear();
    setGoogleToken(null)
    setToken(null)
    setPhoneId(null)
    navigate("/login")
  }
  const handleClear = () => {
    localStorage.clear();
    navigate("/login")
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
              {
                localStorage.getItem('role') ? (
                  <>
                    <Nav.Link onClick={() => navigate("/getUser")}><h6>Users</h6></Nav.Link>
                    <Nav.Link onClick={() => navigate("/bizFiles")}><h6>BizFiles</h6></Nav.Link>
                  </>
                ) : null}
              <Nav.Link onClick={() => navigate("/addFile")}><h6>Add File</h6></Nav.Link>
            </Nav>
              {
              localStorage.getItem("email") || localStorage.getItem("loginToken") || localStorage.getItem('uid') ? (
                <button className="btnd" onClick={handleClick} >Logout</button>
              ) : (
                null
              )
            }
            {/* {
              (
                <button className="btnd" onClick={handleClear}>Logout</button>
              ) : (
                null
              )
            } */}
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  )
}