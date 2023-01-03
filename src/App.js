import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Main from "./Components/Main.js";
import {React ,useEffect,useState} from "react";
import Zadania from './Components/Zadania.js';
import Materiały from "./Components/Materiały.js";
import api from './api/posts.js';
import PanelAdmina from "./ComponentyAdmin/PanelAdmina.js";
import ZadaniaDetails from "./Components/ZadaniaDetails.js";
import ZadaniaDetails5 from "./Components/ZadaniaDetails5.js";
import ShowAllUsers from "./ComponentyAdmin/ShowAllUsers.js";


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [kategorie,setKategorie]=useState([]);
  const [zadania,setZadania]=useState([]);



  useEffect(()=>{
    const fetchPosts=async()=>{
      try{
        const response = await api.get('/hello');
        setKategorie(response.data)

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
    fetchPosts();
  },[])
  useEffect(()=>{
    const fetchZadania=async()=>{
      try{
        const response = await api.get('/loadExercises');
        setZadania(response.data)

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
    fetchZadania();
  },[])





  return (
    
    <BrowserRouter>
    <div>
    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    <Routes>
      <Route path="/" element={<Main kategorie={kategorie}/>}></Route>
      <Route path="/zadania"element={<Zadania zadania={zadania}/>}></Route>
      <Route path="/materialy"element={<Materiały kategorie={kategorie} setKategorie={setKategorie}/>}></Route>
      <Route path="/admin"element={<PanelAdmina kategorie={kategorie}/>}></Route>
      <Route path="zadania/1" element={<ZadaniaDetails5 zadania={zadania.filter((zadania)=>zadania.id===1)}/>} />
      <Route path="zadania/2" element={<ZadaniaDetails5 zadania={zadania.filter((zadania)=>zadania.id===2)}/>} />
      <Route path="zadania/3" element={<ZadaniaDetails5 zadania={zadania.filter((zadania)=>zadania.id===3)}/>} />
      <Route path="zadania/4" element={<ZadaniaDetails5 zadania={zadania.filter((zadania)=>zadania.id===4)}/>} />
      <Route path="zadania/5" element={<ZadaniaDetails5 zadania={zadania.filter((zadania)=>zadania.id===5)}/>} />



    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
