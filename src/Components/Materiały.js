import React, { useEffect, useState } from  'react';
import { CardBody, Card,CardHeader } from 'reactstrap';
import App from '../App';



function Materialy({kategorie,setKategorie}){

    const [kategoria1,setSecondKategoria]=useState('');

   useEffect(()=>{
    console.log(kategoria1)
  
   })
    
    
    const showitems = kategorie.map((kategoria) => {
        return (
            <Card key={kategoria.id} onClick={(e) => setSecondKategoria(kategoria)} >
                <CardBody>
                   {kategoria.kategoria}
                  
                </CardBody>
            
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
                            Treść
                        </CardHeader>
                        {kategoria1.text}
                </div>
            </div>
        </div>
    )
}
export default Materialy;