import React from 'react';
import { Navbar, Nav, NavItem,Card,CardBody,CardTitle, Container, Row, Col,Button,CardText} from 'reactstrap';
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
            <strong>oferuje szereg zasobów i samouczków zaprojektowanych, aby pomóc użytkownikom rozwinąć solidne zrozumienie algorytmów i ich działania. Niezależnie od tego, czy jesteś początkujący i chcesz nauczyć się podstaw, czy jesteś doświadczonym programistą chcącym pogłębić swoją wiedzę, mamy coś dla Ciebie </strong>           </p>
            <hr className="my-2" />
            <p>
Przejdź do zadań i sprawdź się            </p>
            <p className="lead">
              <Button color="primary" a href="/zadania">Zobacz zadania</Button>
            </p>
        </Col>
        </Row>
        <Row>
        <h1 className="display-3">Zobacz, która kategoria cię interesuje i przejdź do odpowiedniego panelu</h1>
            <p className="lead">
                Na stronie znajdziesz 6 typów zadań:

                          </p>
        </Row>
        <Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Tablice Jednowymiarowe
      </CardTitle>
      <CardText>
        Zadania dotyczące tablic 1-D
      </CardText>
      <Button color="primary" a href="/tablice">Zobacz zadania</Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Tablice Dwuwymiarowe
      </CardTitle>
      <CardText>
        Zadania dotyczące tablic 2-D
      </CardText>
      <Button color="primary" a href="/tablicedwu">Zobacz zadania</Button>
    </Card>
  </Col>
</Row>
<Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
       Operacje tekstowe na ciągach znaków
      </CardTitle>
      <CardText>
        Zadania wymagające znajomości ciągów tekstowych
      </CardText>
      <Button color="primary" a href="/string">Zobacz zadania</Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Programowanie dynamiczne
      </CardTitle>
      <CardText>
        Zadania dotyczące optymalizacji 
      </CardText>
      <Button color="primary" a href="/dynamiczne">Zobacz zadania</Button>
    </Card>
  </Col>
</Row>
<Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
      Sortowanie
      </CardTitle>
      <CardText>
       Zadanie wymagające znajomości metod sortowania
      </CardText>
      <Button color="primary" a href="/sortowanie">Zobacz zadania</Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Rekurencja
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="primary" a href="/rekurencja">Zobacz zadania</Button>
    </Card>
  </Col>
</Row>
        
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;

        </Container>
        
            </div>
    )
}

export default StronaGlowna;