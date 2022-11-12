import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Main from "./Components/Main.js";
import {React ,useEffect,useState} from "react";
import Zadania from './Components/Zadania.js';
import Materiały from "./Components/Materiały.js";
import api from './api/posts.js';


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [kategorie,setKategorie]=useState([]);

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



  return (
    
    <BrowserRouter>
    <div>
    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    <Routes>
      <Route path="/" element={<Main kategorie={kategorie}/>}></Route>
      <Route path="/zadania"element={<Zadania/>}></Route>
      <Route path="/materialy"element={<Materiały kategorie={kategorie} setKategorie={setKategorie}/>}></Route>
    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
