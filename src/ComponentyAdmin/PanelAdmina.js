import { useEffect } from 'react';
import {React, Component, useState} from 'react';
import {Card,CardBody} from 'reactstrap';
import apiRequest from '../api/apiRequest.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShowAllUsers from './ShowAllUsers.js';
import DodajZadanie from './DodajZadanie.js';

function PanelAdmina({kategorie}){
  

    const mystyle = {
        width: "500px",
  height: "150px",
  padding: "12px 20px",
  border: "2px solid #ccc",
  backgroundColor: "#f8f8f8",
  fontSize: "16px",
  resize: "none",
      }
     
    


        return(
            <div>
                <div className="container-fluid">
                    <div className='row'>
                <div className='col-sm-3 first'>
                <Card className='bg-info text-white'   style={{ border: '1px solid gray', borderRadius: '10px', boxShadow: '5px 5px 5px gray' }}>
                    <CardBody>
                   <ShowAllUsers></ShowAllUsers>
                    </CardBody>
                </Card>
                
                <Card  style={{ height: '7rem',width:'20rem',border: '1px solid gray', borderRadius: '10px', boxShadow: '5px 5px 5px gray' }}>
                    <h1>Użytkownicy</h1>
                    <CardBody>CHUJ</CardBody>
                </Card>
                
                <Card>
                    <h1>Dodaj materialy</h1>
                    <CardBody>CHUJ</CardBody>
                </Card>
                <Card>
                    <h1>Dodaj zadanie</h1>
                    <CardBody></CardBody>
                </Card>
                </div>
                <div class='col-sm-7'>
           <DodajZadanie></DodajZadanie>
            <div>
            
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
        
    

        }

export default PanelAdmina;