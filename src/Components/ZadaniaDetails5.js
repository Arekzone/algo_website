import React, { Component, useState } from "react";
import { useEffect } from "react";
import { Card, CardBody,Button,Container,Col,Row } from "reactstrap";
import Compiler from "./Compiler";
import api from "../api/posts";
import { Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import "./ZadaniaDetails.css";
import useStatewithDep from "./useStatewithDep";
import '../assets/StronaGlowna.css';
function ZadaniaDetails5({ zadania }) {
    const [kompilacja,setWynik2]=useState();
    const [clientId,setClientId]=useState("897c8c64f5b07bb600f4c166e7f64162");
    const [clientSecret,setClientSecret]=useState("62db5bd0ba4aa2547508e59f6871439fcf79d66e913d85da5117d6092824f3c5");
    const[script,setScript]=useState("");
    const[language,setLanguage]=useState("nodejs");
    const[versionIndex,setVersionIndex]=useState("1");
    const[output,setoutput]=useState([]);
    const[user,setUser]=useState("");
    const[userId,setUserId]=useState("");
    // stworzony hook aby pobierac stan wczseniejszego componentu 
    const[wynikZadania,setWynikZadania]=useStatewithDep(...zadania);
    const[poprawnyWynik, setPoprawnyWynik]=useState('');
    const[isActive,setIsActive]=useState(false);
    const[komentarze,setKomentarze]=useState([]);
    const[zadanieId1,setZadanieId]=useState('');
    const [komentarz, setKomentarz] = useState('');

    useEffect(()=>{
        setPoprawnyWynik(wynikZadania.poprawnyWynik);
        setZadanieId(wynikZadania.id);
        console.log(zadanieId1);
    },[])

    const base_id="/zadania/komentarze";

    function handleKomentarze(event) {
        event.preventDefault();
        const fetchKomentarze=async()=>{
          try{
            const response = await api.get(base_id+'/'+zadanieId1);
            setKomentarze(response.data)
            console.log(komentarze);
            console.log(poprawnyWynik)
    
          }catch(err){
            if(err.response){
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            }else{
              console.log(`Error: ${err.message}`);
            }
          }
        }
        fetchKomentarze();

      }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await api.get("/auth/me", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            });
            setUser(response.data);
            setUserId(JSON.stringify(response.data.id));
            
            
          } catch (err) {
            console.error(err);
            
          }
        };
        fetchData();
        
      }, []);
    const handleChange = event => {
        setScript(event.target.value);
      };

    
      const handleSelect = event => {
        setLanguage(event.target.value);
      };

       function handleCompilation(event) {
        event.preventDefault();
        // Validate form fields
        // Send a request to the server to compile
      api.post('/kompilator', {
            script: script,
            language: language,
            versionIndex: versionIndex,
            clientId: clientId,
            clientSecret: clientSecret,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        })
        .then(response => {
            console.log(response);
            console.log(response.data);
            setoutput(response.data);
            if(output.output===poprawnyWynik){
                setIsActive(true);
            }
           
           
          })
          .catch(error => {
            console.error(error);
          })
        }
       
        const showkomentarze=komentarze.map((zadanie)=>{
            return (
                <Card key={zadanie.id} >
                    <CardBody>
                        {zadanie.komentarz}
                    </CardBody>
                    <CardBody>
                        {zadanie.localUser.username}
                    </CardBody>
                    <CardBody>
                    </CardBody>
    
                </Card>)
        });

    const showitems = zadania.map((zadanie) => {
        return (
            <Card key={zadanie.id} >
                <CardBody>
                    {zadanie.text}
                </CardBody>
                <CardBody>
                    {zadanie.poprawnyWynik}
                    {zadanie.kategoria}
                </CardBody>
                <CardBody>
                </CardBody>

            </Card>
        )
    });

    const basee_id="/zadania/komentarze";

    function dodajKomentarz(event){
        event.preventDefault();
        api.post(base_id+'/'+zadanieId1+'/'+userId, {
            komentarz:komentarz,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        })
        .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          })
          setKomentarz("");
          dodajKomentarz();
    }

    

    return (
        <>
        <Container>
        <Row>
        <Col sm="4">
            <h1>{showitems}</h1>
            <h1>{showkomentarze}</h1>
            <h1>Posortuj tablicę wartościami rosnąco</h1>
           <h1>Twój wynik: {output.output}</h1>
           <h1>Podpowiedź: Jeśli nie znasz składni Javascript użyj swojego ulubionego języka i użyj narzędzia, które zmieni Twój kod na kod Javascript</h1>
            {isActive ? <Button color="success">Poprawny Wynik, Kliknij by przesłać do bazy danych</Button> : <Typography variant="h5">Błędny wynik</Typography>}
        </Col>
            <div className="col-7">
            <Button onClick={handleKomentarze}>Załaduj komentarze użytkoników do zadań</Button>
            <Button color="primary" outline
             className="mx-2 glowing-button" disabled={user.isPremium === null}>Podejrzyj odpowiedź</Button>
                <form onSubmit={handleCompilation} className="compiler-form">
                <textarea value={script} onChange={handleChange} />
      <div className="language-select">
      <Typography variant ="h5" color={green} sx={{m: "10px 0 10px 70px"}}>Napisz swoją odpowiedź w Javascript i kliknij Submit</Typography>
      </div>
      <button type="submit">Submit</button>
    </form>
    <form onSubmit={dodajKomentarz}>
            <textarea value={komentarz} onChange={e => setKomentarz(e.target.value)} />
            <button type="submit">Dodaj komentarz</button>
        </form>
              </div>
            
            </Row>
            </Container>
           
        
            
        </>

    )
}

export default ZadaniaDetails5;