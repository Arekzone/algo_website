import React, { Component } from "react";
import {Card,CardBody} from "reactstrap";

function ZadaniaDetails5({zadania}){

    const showitems = zadania.map((zadanie) => {
        return (
            <Card key={zadanie.id} >
                <CardBody>
                   {zadanie.text}
                  
                </CardBody>
            
            </Card>
)})

        return(
            <>
            <h1>{showitems}</h1>
            </>

        )
}

export default ZadaniaDetails5;