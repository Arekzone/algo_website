import {Card, Col, ModalBody, ModalFooter, Nav, NavItem,Row,CardBody,NavLink, NavbarBrand, NavbarToggler,Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Navbar, Input,Form,FormInput,Label,Button,Modal,ModalHeader, Jumbotron, FormGroup} from 'reactstrap';
import {React, Component, useState} from 'react';
import { Link } from 'react-router-dom';
import Zadania from './Zadania.js';

 

function Header({isOpen, setIsOpen}){

  const [modal, setModal] = useState(false);
  const[username,setUserName]=useState('');

        const mystyle = {
          color: "white",
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Arial",
        }
       
       
        const handleLogin=(e)=>{
          //możemy to zrobić dzięki metodzie Ref w Inpucie
          e.preventDefault();
          alert("submitted"+this.username.value+this.password.value);

      
      }
    // Toggle for Modal
    const toggle2 = () => setModal(!modal);
  
    


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
           <NavItem><Button color="primary"
                onClick={toggle2}>Open Modal</Button></NavItem>
          </Nav>
          </Collapse>
          </Navbar>
            <Modal isOpen={modal}
                toggle={toggle2}
                >
                <ModalBody>
                <Form onSubmit={handleLogin}>
                       <Label>UserName</Label>
                       <Input type="text" id="username" name="username"
                       innerRef={(input)=>setUserName(input)}/>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
          
          </div>
        );
      }
    

export default Header;