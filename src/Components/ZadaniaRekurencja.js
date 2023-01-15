import {Card,CardBody,Container,Col} from "reactstrap";
import {Link} from "react-router-dom";

function ZadaniaRekurencja({zadania}){

    const showitems = zadania.filter(zadanie=>zadanie.kategoria==="rekurencja").map(zadanie=> {
        return (
            <Card key={zadanie.id} className="my-2 justify-content-center">
              <Link to={`/zadania/${zadanie.id}`} style={{ textDecoration: 'none' }}>
                <CardBody><p style={{fontSize:'30px'}}>{zadanie.nazwaZadania}</p></CardBody>
                <CardBody className="text-muted">{zadanie.kategoria}</CardBody>
              </Link>
            </Card>
          );
      });

    return(
        <Container>
            <Col sm="12" className="justify-content-center">
        <div>{showitems}</div>
        </Col>
        </Container>
    )
}

export default ZadaniaRekurencja;