import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import { BrowserRouter, Route,Routes, UNSAFE_RouteContext} from 'react-router-dom';
import Main from "./Components/Main.js";
import {Fragment, React ,useEffect,useState} from "react";
import Zadania from './Components/Zadania.js';
import Materiały from "./Components/Materiały.js";
import api from './api/posts.js';
import PanelAdmina from "./ComponentyAdmin/PanelAdmina.js";
import ZadaniaDetails5 from "./Components/ZadaniaDetails5.js";
import {ColorModeContext, useMode} from './scenes/theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/dashboard/global/Sidebar.jsx";
import { MenuUnstyledContext } from "@mui/base";
import StronaGlowna from "./Components/Stronaglowna";
import RegistrationForm from "./Components/Registration.js";
import { JsonRequestError } from "fullcalendar";
import Login from "./Components/Login.js";
import { TokenContext } from "./loginContext/AuthProvider.js";
import SidebarZadania from "./Components/SidebarZadania.js";
import ZadaniaTablice from "./Components/ZadaniaTablice.js";



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
        const response = await api.get('/zadania/all');
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
        <Route exact path="/admin" element={<PanelAdmina kategorie={kategorie} />}></Route>
        <Route path="/" element={<StronaGlowna/>}></Route>
        <Route path="/main" element={<Main kategorie={kategorie} />}></Route>
          <Route path="/zadania" element={<Zadania zadania={zadania}/>}></Route>
          <Route path="/materialy" element={<Materiały kategorie={kategorie} setKategorie={setKategorie} />}></Route>
          <Route exact path="/admin" element={<PanelAdmina kategorie={kategorie} />}></Route>
          <Route path="zadania/552" element={<ZadaniaDetails5 zadania={zadania.filter((zadania) => zadania.id === 552)} />} />
          <Route path="zadania/752" element={<ZadaniaDetails5 zadania={zadania.filter((zadania) => zadania.id === 752)} />} />
          <Route path="zadania/3" element={<ZadaniaDetails5 zadania={zadania.filter((zadania) => zadania.id === 3)} />} />
          <Route path="zadania/4" element={<ZadaniaDetails5 zadania={zadania.filter((zadania) => zadania.id === 4)} />} />
          <Route path="zadania/5" element={<ZadaniaDetails5 zadania={zadania.filter((zadania) => zadania.id === 5)} />} />
          <Route path="/tablice" element={<ZadaniaTablice zadania={zadania} />}/>
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
