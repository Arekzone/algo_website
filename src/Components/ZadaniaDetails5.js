import React, { Component, useState } from "react";
import { useEffect } from "react";
import { Card, CardBody, Button, Container, Col, Row,CardText } from "reactstrap";
import Compiler from "./Compiler";
import api from "../api/posts";
import { Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import "./ZadaniaDetails.css";
import useStatewithDep from "./useStatewithDep";
import '../assets/StronaGlowna.css';
import { BloodtypeOutlined } from "@mui/icons-material";
import axios from "axios";
function ZadaniaDetails5({ zadania }) {
    const [kompilacja, setWynik2] = useState();
    const [clientId, setClientId] = useState("897c8c64f5b07bb600f4c166e7f64162");
    const [clientSecret, setClientSecret] = useState("62db5bd0ba4aa2547508e59f6871439fcf79d66e913d85da5117d6092824f3c5");
    const [script, setScript] = useState("");
    const [language, setLanguage] = useState("nodejs");
    const [versionIndex, setVersionIndex] = useState("1");
    const [output, setoutput] = useState('');
    const [user, setUser] = useState("");
    const [userId, setUserId] = useState("");
    // stworzony hook aby pobierac stan wczseniejszego componentu 
    const [wynikZadania, setWynikZadania] = useStatewithDep(...zadania);
    const [poprawnyWynik, setPoprawnyWynik] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [komentarze, setKomentarze] = useState([]);
    const [zadanieId1, setZadanieId] = useState('');
    const [komentarz, setKomentarz] = useState('');
    const[skrypt, setSkrypt]=useState("");
    const[zakodowanySkrypt,setZakodowanySkrypt]=useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const[odpowiedzEncoded,setOdpowiedzEncoded]=useState("");
    const[odpowiedz,setOdpowiedz]=useState("");
    const [encodedAnswer, setEncodedAnswer] = useState('');
    const [podejrzyjZadanie, setPodejrzyjZadanie] = useState('');
    const [napisNaKompilatorze,setNapisNaKompilatorze]=useState('package com.example.kompilatorapplication.kody;\npublic class Zadanie{\npublic static void main(String args[]){\n  }\n}');

    useEffect(() => {
        setPoprawnyWynik(wynikZadania.poprawnyWynik);
        setZadanieId(wynikZadania.id);
        console.log(zadanieId1);
        setPodejrzyjZadanie(wynikZadania.odpowiedz);
    }, [])

    const base_id = "/zadania/komentarze";

    useEffect(()=>{
        setScript(napisNaKompilatorze);

    },[])
    function handleKomentarze(event) {
        event.preventDefault();
        const fetchKomentarze = async () => {
            try {
                const response = await api.get(base_id + '/' + zadanieId1);
                setKomentarze(response.data)
                console.log(komentarze);
                console.log(poprawnyWynik)

            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
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
                console.log(userId);


            } catch (err) {
                console.error(err);

            }
        };
        fetchData();

    }, []);
    const handleChange = event => {
        setScript(event.target.value);
        setSkrypt(event.target.value);
        
  let encoded = btoa(skrypt);
  setZakodowanySkrypt(encoded);
  console.log(encoded); 
    };


    const handleSelect = event => {
        setLanguage(event.target.value);
    };

    function handleCompilation(event) {
        event.preventDefault();
        // Validate form fields
        // Send a request to the server to compile
        axios.post('http://localhost:8081/kompilator2', {
            string: zakodowanySkrypt,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
          

    }
    function handleWynik(event) {
        event.preventDefault();
        // Validate form fields
        // Send a request to the server to compile
        axios.post('http://localhost:8080/wynik', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(response => {
                console.log(response);
                console.log(response.data);
                setoutput(response.data);
                console.log(output);
                console.log(poprawnyWynik);
                const poprawnyWynikObject = JSON.parse(poprawnyWynik);
                if (JSON.stringify(output) === JSON.stringify(poprawnyWynikObject)) {
                    setIsActive(true);
                    console.log("chuj");
                }


            })
            .catch(error => {
                console.error(error);
            })
    }

    const showkomentarze = komentarze.map((zadanie) => {
        return (
            <Card className="mb-3" key={zadanie.id} >
                <CardBody className="outline">
                    {zadanie.komentarz}
                </CardBody>
                <CardBody className="text-muted">
                    <strong>Author:</strong> {zadanie.localUser.username}
                </CardBody>
                <CardBody>
                </CardBody>

            </Card>)
    });

    

    const showitems = zadania.map((zadanie) => {
        return (
            <Card
             key={zadanie.id} >
                <CardBody>
                   {zadanie.text}
                </CardBody>
                <CardBody>
                </CardBody>

            </Card>
        )
    });

    const basee_id = "/zadania/komentarze";

    function dodajKomentarz(event) {
        event.preventDefault();
        api.post(base_id + '/' + zadanieId1 + '/' + userId, {
            komentarz: komentarz,
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
    const formStyles = {
        form: {
            width: '50%',
            margin: '0 auto',
            textAlign: 'center',
            padding: '20px'
        },
        textarea: {
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            resize: 'none'
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#2196f3',
            color: '#fff',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
        }
    }

    const baseee_id = "/zadania";

    function sendWynikToDB(event){
        event.preventDefault();
        api.put(baseee_id + '/' + userId +'/wykonane'+ '/' + zadanieId1, {
            wynik: output,
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
            setoutput('');
    }

    function Success({ output, wynikZadania }) {
        const poprawnyWynikObject = JSON.parse(wynikZadania.poprawnyWynik);
        return (
            <div>
                {JSON.stringify(output) === JSON.stringify(poprawnyWynikObject) ? (
                    <Button onClick={sendWynikToDB} className="mx-2 glowing-button" color="success">Poprawny Wynik, Kliknij by przesłać do bazy danych</Button>
                ) : (
                    <Typography variant="h5">Błędny wynik</Typography>
                )}

            </div>
        );
    }


    const handleButtonClick = () => {
        setShowAnswer(!showAnswer);
      }
    
    

return (
    <>
        
        <Container>
        <Col sm="9">
            &nbsp;
            &nbsp;
            <h1>Treść zadania</h1>
            <h1>{showitems}</h1>
        </Col>
            <Row>
                <Col sm="4">
                 <Button color="primary" className="mx-2 glowing-button" onClick={handleButtonClick}>Podejrzyj odpowiedź</Button>
      {showAnswer && (
        <Card className="small-font">
          <CardText className="small-font">
            <p>{atob(podejrzyjZadanie)}</p>
          </CardText>
        </Card>
      )}
                    <h1>{output.output}</h1>
                    <h1><Success output={output} wynikZadania={wynikZadania} /></h1>
                    <p>Podpowiedź: Jeśli nie wiesz jak zacząć, zobacz "podejrzyj odpowiedź"</p>
                </Col>
                <div className="col-7" >
                    <h5 style={{marginLeft: "80px", color:"#a30b0d"}}>Nie usuwaj tego co jest napisane, tylko napisz swoją funkcje</h5>
                    <h5 style={{marginLeft: "80px", color:"#a30b0d"}}>w klasie Zadanie</h5>
                    <form onSubmit={handleCompilation} className="compiler-form">
                        <textarea value={script} onChange={handleChange} onBlur={handleChange} />
                        <div className="language-select">
                            <Typography variant="h5" color={green} sx={{ m: "10px 0 10px 0px" }} align="center">Napisz swoją odpowiedź w języku Java i kliknij "Submit", a następnie "Sprawdź wynik"</Typography>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <form onSubmit={handleWynik} className="col-sm-3" style={{marginLeft:'19vh'}}>
                    <Button color="primary" type="submit">Sprawdź Wynik</Button>
                    </form>
                    &nbsp;
                </div>
                <Col sm="10">
                    <form style={formStyles.form} onSubmit={dodajKomentarz}>
                        <textarea style={formStyles.textarea} value={komentarz} onChange={e => setKomentarz(e.target.value)} />
                        <button style={formStyles.button} type="submit">Dodaj komentarz do zadania</button>
                    </form>
                    <Button size="1g" onClick={handleKomentarze}>Załaduj komentarze użytkowników do zadania</Button>
                    <h1>{showkomentarze}</h1>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;

                </Col>

   

            </Row>
        </Container>
&nbsp;


    </>

)
}

export default ZadaniaDetails5;