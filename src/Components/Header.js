import {
  Card, Col, ModalBody, ModalFooter, Nav, NavItem, Row, CardBody, NavLink, NavbarBrand, NavbarToggler, Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Navbar, Input, Form, FormInput, Label, Button, Modal, ModalHeader, Jumbotron, FormGroup
} from 'reactstrap';
import { React, Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Zadania from './Zadania.js';
import "../assets/Header.css";
import Registration from "./Registration";
import Login from './Login.js';
import logo from "../assets/logomniejsze.png";



function Header({ isOpen, setIsOpen }) {

  const [modal, setModal] = useState(false);
  const [username, setUserName] = useState('');
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  })
  const[islogged,setisLogged]=useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  }


  const handleLogin = (e) => {
    //możemy to zrobić dzięki metodzie Ref w Inpucie
    e.preventDefault();
    alert("submitted" + this.username.value + this.password.value);


  }
  // Toggle for Modal
  const toggle2 = () => setModal(!modal);
  const toggle3 = () => setRegisterModal(!registerModal);

  const toggle = () => setIsOpen(!isOpen);

  const toggle4=()=>{
    localStorage.removeItem('token');
    setisLogged(null);
  };



  return (
    <div>
      <Navbar style={mystyle} className="navbar-expand-sm bg-dark">
        <NavbarBrand ><Link to="/"><img src={logo} alt ="logo"/></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto ml-auto" navbar>
            <NavItem> <Link to="/zadania">Zadania</Link></NavItem>
            <NavItem> <Link to="/materialy">Materiały</Link></NavItem>
            <NavItem >Hello2</NavItem>
            </Nav>
            <NavbarText>
            <Button color="primary" outline
              onClick={toggle2} className="mx-2 glowing-button" disabled={localStorage.getItem('token') !== null}>Login</Button>
            <Button color="primary" outline
              onClick={toggle3} className="mx-2 glowing-button">Register</Button>
              <Button color="primary" outline
              onClick={toggle4} className="mx-2 glowing-button" disabled={localStorage.getItem('token') == null}>Logout</Button>
          </NavbarText>

        </Collapse>
      </Navbar>
      <Modal isOpen={modal}
        toggle={toggle2}

      >
        <ModalHeader toggle={toggle2}>Login</ModalHeader>
        <ModalBody className="p-3">
          <Login/>
        </ModalBody>
      </Modal>
      <Modal isOpen={registerModal} 
      toggle={toggle3}
      
      >
  <ModalHeader toggle={toggle3}>Register</ModalHeader>
  <ModalBody style={{width:'500px'}}>
    <Registration/>
  </ModalBody>
</Modal>

    </div>
  );
}


export default Header;