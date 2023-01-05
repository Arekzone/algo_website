import React from 'react';
import { Navbar, Nav, NavItem, Container, Row, Col,Button} from 'reactstrap';
import {useTheme, Typography} from "@mui/material";
import {tokens} from "../scenes/theme";
import '../assets/StronaGlowna.css';

function StronaGlowna(){
 
    return(
        <div className='stronaglowna_body'>
            <Container>
        <Row>
        <Col xs="12">
            <h1 className="display-3">Algonauka</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <hr className="my-2" />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="lead">
              <Button color="primary" a href="/zadania">Zobacz zadania</Button>
            </p>
        </Col>
        </Row>
        <Row>
        <h1 className="display-3">Welcome to My Landing Page</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Row>
        <Row className="third-row">
        <h1>Welcome to My Landing Page</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Row>
        &nbsp;
        <Row className="forth-row">
        <h1>Welcome to My Landing Page</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Row>
        <Row>
        <Col xs="6">
          <div className="element-container">
            <h3>Element 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button>Button 1</Button>
          </div>
        </Col>
        <Col xs="6">
          <div className="element-container">
            <h3>Element 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button>Button 2</Button>
          </div>
        </Col>
      </Row>
        </Container>
        <footer className="bg-dark text-white py-3">
      <Container>
        <Typography variant="h5" color="green">Linki</Typography>
        <Row>
          <Col xs="6">
            <a href="#" className="text-white">Link 1</a><br />
            <a href="#" className="text-white">Link 2</a><br />
            <a href="#" className="text-white">Link 3</a>
          </Col>
          <Col xs="6">
            <a href="#" className="text-white">Link 4</a><br />
            <a href="#" className="text-white">Link 5</a><br />
            <a href="#" className="text-white">Link 6</a>
          </Col>
        </Row>
      </Container>
    </footer>
            </div>
    )
}

export default StronaGlowna;