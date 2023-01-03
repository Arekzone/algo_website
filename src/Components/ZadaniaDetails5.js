import React, { Component, useState } from "react";
import { useEffect } from "react";
import { Card, CardBody } from "reactstrap";

function ZadaniaDetails5({ zadania }) {
    const [wynik, setWynik] = useState();


    useEffect(()=>{
        console.log(wynik)
      
       })
    
       const handleSubmit=(e)=>{
        e.preventDefault();
        if(Number(wynik)<=5){
            console.log("dobry wynik");
        }
       }

    const showitems = zadania.map((zadanie) => {
        return (
            <Card key={zadanie.id} >
                <CardBody>
                    {zadanie.text}
                </CardBody>

            </Card>
        )
    })

    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-sm-5">
            <form onClick={handleSubmit} >
              <h2>Wpisz wynik</h2>
              <div className="Field">
                <input type="text" 
                value ={wynik} 
                onChange={e=>setWynik(e.target.value)}
              /></div>
              <button type="submit">Submit</button>
            </form>
            <h1>{showitems}</h1>
            <h1>Posortuj tablicę wartościami rosnąco</h1>
            </div>
            <div className="col-sm-7">
            <form>
  <label>
    Name:
    <section type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
            </div>
            </div>
            </div>
        
            
        </>

    )
}

export default ZadaniaDetails5;