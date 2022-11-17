import React from "react";
import { Card, CardBody,CardHeader } from "reactstrap";
import {Link} from 'react-router-dom';



function Zadania({zadania}){
    const showitems = zadania.map((zadanie) => {
        return (
            <Card key={zadanie.id}>
                <Link to={`/zadania/${zadanie.id}`}>
                <CardBody>
                    {zadanie.checked}
                   {zadanie.text}
                </CardBody>
                </Link>
            
            </Card>
        )})
    return(
        <div className='container'>
            <div className='row row-content'>
                <div className='col-sm-5'>
                        <CardHeader className="">
                            Kategorie
                        </CardHeader>
                        {showitems}
                </div>
                <div className='col-sm-7'>
                <CardHeader className="">
                            
                        </CardHeader>
                </div>
            </div>
        </div>
    )
}
export default Zadania;