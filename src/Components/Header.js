import {Card, Col, Modal, ModalBody, ModalFooter, Nav, NavItem,Row,CardBody,NavLink, Button, NavbarBrand, NavbarToggler,Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Navbar} from 'reactstrap';
import {React, Component} from 'react';
import { Link } from 'react-router-dom';
import Zadania from './Zadania.js';

 

function Header({isOpen, setIsOpen}){

        const mystyle = {
          color: "white",
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Arial",
        }


  const toggle = () => setIsOpen(!isOpen);
        return (
          <div>
          <Navbar style={mystyle} className="navbar-expand-sm bg-dark"> 
            <NavbarBrand ><Link to="/">tutaj wstawic znaczek</Link></NavbarBrand>
            <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem> <Link to="/zadania">Zadania</Link></NavItem>
            <NavItem> <Link to="/materialy">Materiały</Link></NavItem>
            <NavItem >Hello2</NavItem>
          </Nav>
          </Collapse>
          </Navbar>
          </div>
        );
      }
    

export default Header;