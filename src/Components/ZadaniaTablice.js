import {Card,CardBody} from "reactstrap";
import {Link} from "react-router-dom";

function ZadaniaTablice({zadania}){

    const showitems = zadania.filter(zadanie=>zadanie.kategoria==="tablice").map(zadanie=> {
        return (
            <Card key={zadanie.id}>
              <Link to={`/zadania/${zadanie.id}`}>
                <CardBody>{zadanie.nazwaZadania}</CardBody>
              </Link>
            </Card>
          );
      });

    return(
        <div>{showitems}</div>
    )
}

export default ZadaniaTablice;