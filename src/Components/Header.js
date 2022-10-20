import {Card, Col, Modal, ModalBody, ModalFooter, Nav, NavItem,Row,CardBody,NavLink, Button } from 'reactstrap';
import {React, Component} from 'react';

 

class Header extends Component{
    render() {
        const mystyle = {
          color: "white",
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Arial",
        };
        return (
          <div>
          <Nav style={mystyle}>
            <NavItem>Hello</NavItem>
            <NavItem >Hello2</NavItem>

          </Nav>
          </div>
        );
      }
    }

export default Header;